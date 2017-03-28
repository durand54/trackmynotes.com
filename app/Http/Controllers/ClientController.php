<?php

namespace TrackMyNotes\Http\Controllers;

use TrackMyNotes\Http\Requests\ClientRequest;
//use Illuminate\Http\Request;
use TrackMyNotes\Client;

class ClientController extends Controller
{
    public function index()
    {
        $clients = Client::all();
        //return dd($clients);
        return view('clients.index', compact('clients'));
    }

    public function create()
    {
        //flash()->overlay('Welcome Back','');
        return view('clients.create');
    }

    public function store(ClientRequest $request)
    {
        //return dd($request);
        Client::create($request->all());
        flash()->success('Success!','Your client has been successfully created!');
        return redirect()->back();//temporary
    }
}
