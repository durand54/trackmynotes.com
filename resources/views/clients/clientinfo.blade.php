@inject('clientStatus','TrackMyNotes\Http\Utilities\ClientType')
@extends('layouts.app')
@section('content')
    <div class="jumbotron" xmlns="http://www.w3.org/1999/html">
        <h1>{{ $client->groupname }}</h1>
    </div>
    <div class="jumbotron" xmlns="http://www.w3.org/1999/html">
        <h3>Contact: {{ $client->firstname }} {{ $client->lastname }}, {{ $client->title }} Email: {{ $client->contactemail }} Phone: {{ $client->contactphone }}</h3>
    </div>
@unless ($client->notes->isEmpty())
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <ul class="list-group">

                            @foreach($client->notes as $note)

                                <li class="list-group-item card-notes">{{ $note->note }} <span class="notes-span">Status:</span> {{ $note->status }} <span class="notes-span">Call Date:</span> @if($note->calldate != '0000-00-00 00:00:00') {{  date('F d, Y', strtotime($note->calldate)) }}@endif
                                    <button class="card-btn-right btn"><a href="/note/{{ $note->id }}/{{ $client->id }}">Edit</a></button>
                                    @if($note->completed === 1)
                                        <button class="card-btn-complete btn">Completed</button>
                                    @else
                                        <button class="card-btn-incomplete btn">In Complete</button>
                                    @endif
                                    </li>
                            @endforeach

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endunless
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <h1 style="text-align: left; color: #939393;">Add A New Note</h1>
                        <div class="col-md-11">
                            <form class="form-horizontal" role="form" method="POST" action="/client/{{ $client->id }}/note">
                                <div class="form-group">
                                    <input type="hidden" name="id" value="{{ $client->id }}" >
                                    <input id="note" type="text" class="form-control" name="note"
                                           value="{{ old('note') }}" required >
                                    <input id="groupname" type="text" class="form-control" name="groupname"
                                           value="{{ $client->groupname }}" required>

                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="col-md-3">
                                                <fieldset class="form-group" style="width: 80%;margin-left: 10%;">
                                                    <label for="status" class="control-label">Status</label>
                                                    <select id="status" name="status" class="form-control">

                                                        @foreach($clientStatus::all() as $code => $name)
                                                            <option value="{{ $name }}">{{ $name }}</option>
                                                        @endforeach
                                                    </select>
                                                </fieldset>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="form-group{{ $errors->has('calldate') ? ' has-error' : '' }}">
                                                    <label for="calldate" class="control-label">Call Date</label>
                                                    <input placeholder="Selected date" type="text" id="calldate" class="form-control datepicker" name="calldate"
                                                           value="{{ old('calldate') }}">
                                                </div>
                                            </div>
                                            <div class="col-md-1"></div>
                                            <div class="col-md-3">
                                                <div class="control-group">
                                                    <label class="control-label" for="completed" >Completed</label>
                                                    <div class="controls">
                                                        <div class="make-switch" tabindex="0">
                                                            <input class="completed" type="checkbox" name="completed" value="" data-off-text="INCOMPLETE" data-on-text="COMPLETE" data-off-color="danger" data-on-color="success" data-size="large">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {{ csrf_field() }}
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-primary">Submit A Note</button>
                                    </div>
                                </div>
                            </form>
                        </div>
        <div class="content">
            @if (count($errors))
                <ul class="list-group">
                    @foreach ( $errors->all() as $error)
                        <li class="list-group-item card-notes">{{ $error }}</li>
                    @endforeach
                </ul>
            @endif
        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <form class="form-horizontal" role="form" method="POST" action="/client/{{ $client->id }}"
                              enctype="multipart/form-data">
                            {{ method_field('PATCH') }}
                            @include('clients.edit', compact('client'));
                            <div class="col-md-12">
                                <div class="form-group">
                                    @if( count($errors) > 0 )
                                        <div class="alert alert-danger">
                                            <ul>
                                                @foreach( $errors->all() as $error)
                                                    <li>{{ $error }}</li>
                                                @endforeach
                                            </ul>
                                        </div>
                                    @endif
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection