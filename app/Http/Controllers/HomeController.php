<?php

namespace TrackMyNotes\Http\Controllers;

use Illuminate\Http\Request;
use TrackMyNotes\Client;

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
        parent::__construct();
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       // return view('home');
        $clients = Client::orderBy('groupname')->paginate(16);
//        $clients = Client::where('groupname','LIKE','W%')->orderBy('groupname')->paginate(15);
        //return dd($clients);
        return view('clients.index', compact('clients'));
    }
}
