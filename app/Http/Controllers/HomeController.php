<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Storage;
use xPaw\MinecraftQuery;
use xPaw\MinecraftQueryException;

class HomeController extends Controller
{
	public function home() {

		$Query = new MinecraftQuery( );

		try { $Query->Connect( env('MC_QUERY_HOST'), env('MC_QUERY_PORT'), 1 ); }	catch( MinecraftQueryException $e )	{ $Exception = $e; }

		$info = $Query->GetInfo();

		if($info != false) {
			$g_status = "Online";
			$c_player = $info['Players'];
			$m_player = $info['MaxPlayers'];
			$g_version = $info['Version'];
		}
		else {
			$g_status = "Offline";
			$c_player = "NA";
			$m_player = "NA";
			$g_version = "Unknown";
		}

		$img = base64_encode(file_get_contents(config('filesystems.disks.mc-root.root'). "/server-icon.png"));
		$name = env("MC_SERVER_NAME");
        return view('home', ['img' => $img, 'name' => $name, 'c_player' => $c_player, 'm_player' => $m_player, 'g_version' => $g_version, 'g_status' => $g_status]);
	}

    public function admin() {

		$Query = new MinecraftQuery( );

		try { $Query->Connect( env('MC_QUERY_HOST'), env('MC_QUERY_PORT'), 1 ); }	catch( MinecraftQueryException $e )	{ $Exception = $e; }

		$info = $Query->GetInfo();
		if($info != false) {
			$g_status = "Online";
			$c_player = $info['Players'];
			$m_player = $info['MaxPlayers'];
			$g_version = $info['Version'];
		}
		else {
			$g_status = "Offline";
			$c_player = "NA";
			$m_player = "NA";
			$g_version = "Unknown";
		}

		$img = base64_encode(file_get_contents(config('filesystems.disks.mc-root.root'). "/server-icon.png"));
		$name = env("MC_SERVER_NAME");
        return view('admin', ['img' => $img, 'name' => $name, 'c_player' => $c_player, 'm_player' => $m_player, 'g_version' => $g_version, 'g_status' => $g_status]);
	}

	public function console() {
        return view('console');
	}

	public function getFile(Request $request) {
		return json_encode(['name' => $request->input('name'),'content' => Storage::disk('mc-root')->get('/'.$request->input('name'))]);
	}

	public function saveFile(Request $request) {
		$request->validate([
			'name' => 'required',
			'value' => 'required'
		]);
		Storage::disk('mc-root')->put('/'.$request->input('name'), $request->input('value'));
		return response()->json(true);
	}

	public function getDirContent(Request $request) {
		return json_encode(['dirs' => Storage::disk('mc-root')->directories('/'.$request->input('name')), 'files' => Storage::disk('mc-root')->files('/'.$request->input('name'))]);
	}

	public function config() {
		$items = Storage::disk('mc-root')->files('/');
		$dirs = Storage::disk('mc-root')->directories('/');
        return view('config', ['items' => $items, 'dirs' => $dirs]);
	}

	public function logs() {
		$items = Storage::disk('mc-root')->listContents('/logs', true);
		if (isset($_GET['file'])) {

			$file_parts = pathinfo($_GET['file']);

			switch($file_parts['extension'])
			{
				case "gz":
					$gz = config('filesystems.disks.mc-root.root'). "/logs/". $_GET['file'];
					$log_content = gzfile($gz);
					$log_content = implode($log_content);
				break;

				case "log":
					$log_content = Storage::disk('mc-root')->get('/logs/'. $_GET['file']);
				break;

				case "": // Handle file extension for files ending in '.'
				case NULL: // Handle no file extension
				break;
			}
		}
		else {
			$log_content = "Please select a file";
		}
        return view('logs', ['items' => $items, 'log_content' => $log_content]);
    }
}
