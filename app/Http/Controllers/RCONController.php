<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Thedudeguy\Rcon;

class RCONController extends Controller
{
	private function parseMinecraftColors($string) {
		// $string = utf8_decode(htmlspecialchars($string, ENT_QUOTES, "UTF-8"));
		$string = preg_replace('/\xA7([0-9a-f])/i', '<span class="mc-color mc-$1">', $string, -1, $count) . str_repeat("</span>", $count);
		return utf8_encode(preg_replace('/\xA7([k-or])/i', '<span class="mc-$1">', $string, -1, $count) . str_repeat("</span>", $count));
	}

	public function execCmd(Request $request) {

		$host = env('RCON_HOST');
		$port = env('RCON_PORT');
		$password = env('RCON_PASSWORD');
		$timeout = 3;
		$response = array();
		$rcon = new Rcon($host, $port, $password, $timeout);
		if (!$request->filled('cmd')) {
			$response['status'] = 'error';
			$response['error'] = 'Empty command';
		} else {
			try {
				$rcon->connect();
				$rcon->sendCommand($request->input('cmd'));
				$response['status'] = 'success';
				$response['command'] = $request->input('cmd');
				$response['response'] = $this->parseMinecraftColors($rcon->getResponse());
			} catch (\ErrorException $e) {
				$response['status'] = 'error';
				$response['error'] = $e->getMessage();
			}
		}

		return response()->json($response);

	}

}
