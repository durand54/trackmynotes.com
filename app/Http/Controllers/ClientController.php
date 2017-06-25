<?php

namespace TrackMyNotes\Http\Controllers;

use TrackMyNotes\Http\Requests\ClientRequest;
use Illuminate\Http\Request;
use TrackMyNotes\Client;
use TrackMyNotes\Note;
use Illuminate\Support\Facades\Input;
use Carbon\Carbon;

class ClientController extends Controller
{
    public function index()
    {
        $clients = Client::where('archive',0)->orderBy('groupname', 'ASC')->orderBy('eventweek', 'DESC')->paginate(16);
//        $clients = Client::where('groupname','LIKE','W%')->orderBy('groupname')->paginate(15);
        //return dd($clients);
        $today = 'index';
        $yearweek = '';
        return view('clients.index', compact('clients','today','yearweek'));
    }

    public function create()
    {
        //flash()->overlay('Welcome Back','');
        $todayDate = Carbon::today();
        return view('clients.create', compact('todayDate'));
    }

    public function edit( $id )
    {
        $client = Client::where(compact( 'id' ))->first();
        //dd($client);
        return view('clients.clientinfo', compact('client'));
    }

    public function store(ClientRequest $request)
    {
        //return dd($request);
        Client::create($request->all());
        flash()->success('Success!','Your client has been successfully created!');
        return redirect()->back();//temporary
    }

    public function update(Client $client, Request $request)
    {
        //$article = Article::findOrFail($id);

        $client->update($request->all());
        //dd($client);
        flash()->success('Success!','Your client has been successfully updated!');
        return redirect()->back();

    }

    public function search($query)
    {
        $clients = Client::search($query)->orderBy('groupname')->paginate(16);
//        dd($clients);
        return view('clients.search', compact('clients'));
    }

    public function separate($query)
    {
        $cap = $query;
        $clients = Client::where('groupname','LIKE',$cap.'%')->orderBy('groupname')->paginate(16);
        return view('clients.search', compact('clients'));
    }
    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function eventweek()
    {
        $yearweek = Input::get('eventWeek');

//        dd($language);
//        $yearweek = $request->eventWeek;

        $clients = Client::where('eventweek', $yearweek )->orderBy('groupname')->paginate(16);
        //dd($clients);
//        return redirect()->action('ClientController', compact('clients'));
        return view('clients.index', compact('clients', 'yearweek'));
    }

    public function searchAlpha()
    {

        $alphabet = Input::get('alphabet');
        $clients = Client::where('groupname','LIKE',$alphabet.'%')->orderBy('groupname')->paginate(16);
        $today = 'clientsAlpha';
        return view('clients.index', compact('clients','today'));
    }

    public function clientTypes()
    {
        $clientStatus = Input::get('clientType');
        $clients = Client::where('groupstatus','LIKE','%'.$clientStatus.'%')->orderBy('groupname')->paginate(16);
        $today = 'clientTypes';
        return view('clients.index', compact('clients','today'));
    }

    public function clientsHot()
    {
        $clients = Client::where('groupstatus', 'LIKE', 'Hot'.'%')->orderBy('groupname')->paginate(16);
        $today = 'clientsHot';
        return view('clients.index', compact('clients','today'));
    }

    public function clientsNew()
    {
        $clients = Client::where('groupstatus', 'LIKE', 'New'. '%')->orderBy('groupname')->paginate(16);
        $today = 'clientsNew';
        return view('clients.index', compact('clients','today'));
    }

    public function clientsRecent()
    {
        $clients = Client::whereBetween('updated_at',[
            Carbon::parse('last monday')->startOfDay(),
            Carbon::parse('next friday')->endOfDay(),
        ])->orderBy('groupname')->paginate(16);
        $today = "clientsRecent";
        return view('clients.index', compact('clients','today'));
    }

    public function clientsTodayCalls()
    {
        $todayDate = Carbon::today();
        $clients = Client::whereHas('notes', function($query)
        {
            $todayDate = Carbon::today();
            return $query->where('calldate', $todayDate );
        })->orderBy('groupname')->paginate(16);
        $today = "clientsTodayCalls";
        return view('clients.index', compact('clients','today','todayDate'));
    }
    public function clientsCalls()
    {
        $clients = Client::whereHas('notes', function($query)
        {
            return $query->where('calldate', '!=', '' );
        })->orderBy('groupname')->paginate(16);
        $today = "clientsTodayCalls";
        return view('clients.index', compact('clients','today'));
    }
    public function clientsArchive()
    {
        $today = "clientsArchive";
        $clients = Client::where('archive',1)->orderBy('groupname')->paginate(16);
        return view('clients.index', compact('clients','today'));
    }
    public function clientsTurnDown()
    {
        $today = "clientsTurnDown";
        $clients = Client::whereHas('notes', function($query)
        {
            $status = "Turned Down";
            return $query->where('status', $status );
        })->orderBy('groupname')->paginate(16);
        return view('clients.index', compact('clients','today'));
    }
}
