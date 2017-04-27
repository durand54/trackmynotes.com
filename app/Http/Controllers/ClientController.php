<?php

namespace TrackMyNotes\Http\Controllers;

use TrackMyNotes\Http\Requests\ClientRequest;
//use Illuminate\Http\Request;
use TrackMyNotes\Client;

class ClientController extends Controller
{
    public function index()
    {
        $clients = Client::orderBy('groupname')->paginate(15);
//        $clients = Client::where('groupname','LIKE','W%')->orderBy('groupname')->paginate(15);
        //return dd($clients);
        return view('clients.index', compact('clients'));
    }

    public function create()
    {
        //flash()->overlay('Welcome Back','');
        return view('clients.create');
    }

    public function edit( $id )
    {
        $client = Client::where(compact( 'id' ))->first();
        return view('clients.clientinfo', compact('client'));
    }

    public function store(ClientRequest $request)
    {
        //return dd($request);
        Client::create($request->all());
        flash()->success('Success!','Your client has been successfully created!');
        return redirect()->back();//temporary
    }

    public function update(Client $client, ClientRequest $request)
    {
        //$article = Article::findOrFail($id);

        $client->update($request->all());

        flash()->success('Success!','Your client has been successfully updated!');
        return redirect()->back();

    }

    public function search($query)
    {
        $clients = Client::search($query)->get();
//        dd($clients);
        return view('clients.search', compact('clients'));
    }

    public function separate($query)
    {
        $cap = $query;
        $clients = Client::where('groupname','LIKE',$cap.'%')->orderBy('groupname')->paginate(15);
        return view('clients.search', compact('clients'));
    }

}
