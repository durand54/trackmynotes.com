<?php

namespace TrackMyNotes\Http\Controllers;

use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function index()
    {
        //
    }

    public function create()
    {
        return view('clients.create');
    }
}
