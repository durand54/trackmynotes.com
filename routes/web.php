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

Route::get(/**
 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
 */
    '/', function () {
    return view('welcome');
});

Auth::routes();

/*Route::get('clients/search/{query}', function($query) {
    return TrackMyNotes\Client::search($query)->get();
});*/

Route::get('/home', 'HomeController@index');
Route::resource('clients','ClientController');
Route::get('/eventweek','ClientController@eventweek');
Route::get('/searchAlpha','ClientController@searchAlpha');
Route::get('/clientTypes', 'ClientController@clientTypes');
Route::get('/clientsHot' , 'ClientController@clientsHot');
Route::get('/clientsNew' , 'ClientController@clientsNew');
Route::get('/clientsRecent' , 'ClientController@clientsRecent');
Route::get('/clientsTodayCalls' , 'ClientController@clientsTodayCalls');
Route::get('/clientsCalls', 'ClientController@clientsCalls');
Route::get('/clientsTurnDown', 'ClientController@clientsTurnDown');
Route::get('/clientsArchive', 'ClientController@clientsArchive');
Route::get('clients/{client}','ClientController@edit');
Route::patch('client/{client}','ClientController@update');
Route::post('/clients','ClientController@store');
Route::get('clients/dated/{query}', 'ClientController@dated');
Route::get('clients/order/{query}', 'ClientController@separate');
Route::get('clients/search/{query}', 'ClientController@search');

Route::get('imports','CSVImportController@index');
Route::post('importExcel', 'CSVImportController@importExcel');
Route::get('importExport', 'CSVImportController@importExport');

Route::resource('note','NoteController');
Route::patch('/note/{note}', 'NoteController@noteChange');
Route::get('/note/{note}/{client}', 'NoteController@edit');
Route::post('/client/{client}/note','NoteController@store');
Route::patch('/client/{client}/noteupdate', 'NoteController@update');
/*

Route::resource('cvsimport','CSVImportController');
Route::post('importExcel', 'CSVImportController@importExcel');
Route::get('/cvsimport/importExport', 'CSVImportController@importExport');
Route::get('downloadExcel/{type}', 'CSVImportController@downloadExcel');
*/
