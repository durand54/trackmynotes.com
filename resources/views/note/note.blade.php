@inject('clientStatus','TrackMyNotes\Http\Utilities\ClientType')
@extends('layouts.app')
@section('content')
    <div class="jumbotron" xmlns="http://www.w3.org/1999/html">
        <h1>{{ $client->groupname }}</h1>
    </div>
    <div class="jumbotron" xmlns="http://www.w3.org/1999/html">
        <h3>Contact: {{ $client->firstname }} {{ $client->lastname }}, {{ $client->title }} Email: {{ $client->contactemail }} Phone: {{ $client->contactphone }}</h3>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <h1 style="text-align: left; color: #939393;">Update Note</h1>
                        <div class="col-md-11">
                            <form class="form-horizontal" role="form" method="POST" action="/note/{{ $note->id }}">
                                {{ method_field('PATCH') }}
                                <div class="form-group">
                                    <input type="hidden" name="id" value="{{ $note->id }}" >
                                    <input type="hidden" name="clientID" value="{{ $client->id }}" >
                                    <input type="hidden" name="groupname" value="{{ $note->groupname }}" >
                                    <input id="note" type="text" class="form-control" name="note"
                                           value="{{ $note->note }}" required >
                                    <input id="groupname" type="text" class="form-control" name="groupname"
                                           value="{{ $client->groupname }}" disabled>

                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="col-md-3">
                                                <fieldset class="form-group" style="width: 80%;margin-left: 10%;">
                                                    <label for="status" class="control-label">Status</label>
                                                    <select id="status" name="status" class="form-control">
                                                        @foreach($clientStatus::all() as $code => $name)
                                                            @if(  $note->status == $name )
                                                                <option value="{{ $name  }}">{{ $name }}</option>
                                                            @endif
                                                        @endforeach

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
                                                           value="{{ $note->calldate }}">
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
                                        <button type="submit" class="btn btn-primary">Submit Change</button>
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
@endsection