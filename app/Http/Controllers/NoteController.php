<?php

namespace TrackMyNotes\Http\Controllers;
use TrackMyNotes\Client;
use TrackMyNotes\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    public function index()
    {

    }
    public function store(Request $request)
    {
        //dd($request);

        $clientid = $request->input('id');
        $note = Note::create($request->all());
        $note->client()->attach($clientid);
        flash()->success('Success!','Your client has been successfully created!');
        return redirect()->back();
    }
}
