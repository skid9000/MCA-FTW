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
        return view('logs', ['items' => $items]);
    }
}
