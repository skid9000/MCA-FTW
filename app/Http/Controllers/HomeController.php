<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Storage;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    public function admin() {
        return view('admin');
	}

	public function console() {
        return view('console');
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
        return view('logs', ['items' => $items], ['log_content' => $log_content]);
    }
}
