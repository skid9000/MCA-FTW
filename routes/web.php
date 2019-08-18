<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/', 'HomeController@home')->name('home');

Route::get('/admin', 'HomeController@admin')->name('admin')->middleware('auth:web');
Route::get('/admin/console', 'HomeController@console')->name('console')->middleware('auth:web');
Route::get('/admin/logs', 'HomeController@logs')->name('logs')->middleware('auth:web');
Route::get('/admin/editor', 'HomeController@editor')->name('editor')->middleware('auth:web');

Route::post('/admin/rcon', 'RCONController@execCmd')->middleware('auth:web')->name('rcon');
