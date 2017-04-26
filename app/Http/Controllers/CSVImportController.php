<?php

namespace TrackMyNotes\Http\Controllers;

use Illuminate\Http\Request;
use Excel;
use TrackMyNotes\Client;

class CSVImportController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $clients = Client::all();
        return view('cvsimport.importCSV');
       // return view('cvsImport.index');
    }

    /**
     * Return View file
     *
     * @var array
     */
    public function importExport()
    {
        return view('importCSV');
    }

    /**
     * File Export Code
     *
     * @var array
     */
    public function downloadExcel(Request $request, $type)
    {
        $data = Client::get()->toArray();
        return Excel::create('trackmynotes_', function($excel) use ($data) {
            $excel->sheet('mySheet', function($sheet) use ($data)
            {
                $sheet->fromArray($data);
            });
        })->download($type);
    }


    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function importExcel(Request $request)
    {

        if($request->hasFile('import_file')){
            $path = $request->file('import_file')->getRealPath();

            Excel::load(/**
             * @param $reader
             */
                $path, function($reader) {

                // Getting all results
                $results = $reader->get()->toArray();
                forEach ( $results as $row)
                {
                    //echo("<br><br>");
                    //var_dump($row);
                    $client = array_map('trim', $row);
                    Client::create($client);
                    //echo("<br>SUCCESS!!!<br>");

                }


        });
            flash()->success('Success!','Your Excel document has been successfully uploaded!');
            return redirect()->back();
        }

        //return back()->with('error','Please Check your file, Something is wrong there.');
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
