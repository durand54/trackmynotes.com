<?php

namespace TrackMyNotes\Http\Controllers;
use TrackMyNotes\Http\Requests\NoteRequest;
use TrackMyNotes\Client;
use TrackMyNotes\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    public function index()
    {

    }

    public function edit( $nid , $clientid )
    {
        $id = $clientid;
        $client = Client::where(compact( 'id' ))->first();
        $id = $nid;
        $note = Note::where(compact( 'id' ))->first();
        //dd($note,$client);
        return view('note.note', compact('note','client'));
    }

    public function store(Request $request)
    {
        //dd($request);

        $clientid = $request->input('id');
        $note = Note::create($request->all());
        $note->client()->attach($clientid);
        flash()->success('Success!','Your client note has been successfully created!');
        return redirect()->back();
    }
    public function update(Request $request)
    {
        $note = Note::update($request->all());
        return redirect()->back();
    }

    public function show( Request $request)
    {
        echo "show";
        dd( $request );
    }

    public function noteChange( NoteRequest $request)
    {
        $id = $request->input('id');
        $note = Note::where(compact('id'))->first();
        $note->update($request->all());
        //flash()->success('Success!','Your client note has been successfully updated!');
        $id = $request->input('clientID');
        $client = Client::where(compact( 'id' ))->first();
        return view('clients.clientinfo', compact('client'));
    }
}
