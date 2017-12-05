<?php

namespace TrackMyNotes\Http\Controllers;

use Illuminate\Http\Request;

class ARCFormController extends Controller
{
    public function index()
    {
        return view('arcform.archForm');
    }
}
