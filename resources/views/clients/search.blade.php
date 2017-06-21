@inject('eventWeek','TrackMyNotes\Http\Utilities\EventWeek');
@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading">{{ Auth::user()->name }}'s Dashboard</div>

                    <div class="panel-body">
                        <a href="clients/create" class="btn btn-primary">Enter New Client</a>
                        <button class="btn btn-success">Recent</button>
                        <button class="btn btn-danger">Hot</button>
                        <button class="btn btn-primary">Today's Calls</button>
                        <button class="btn btn-primary">Call Backs</button>
                        <button class="btn btn-primary">Turn Downs</button>
                        <button class="btn btn-danger">List All Clients</button>
                        <button class="btn btn-primary">List All Hotels</button>
                    </div>
                    <div class="panel-body">
                        <a href="../../clients/order/A" class="btn btn-danger">A</a>
                        <a href="../../clients/order/B" class="btn btn-danger">B</a>
                        <a href="../../clients/order/C" class="btn btn-danger">C</a>
                        <a href="../../clients/order/D" class="btn btn-danger">D</a>
                        <a href="../../clients/order/E" class="btn btn-danger">E</a>
                        <a href="../../clients/order/F" class="btn btn-danger">F</a>
                        <a href="../../clients/order/G" class="btn btn-danger">G</a>
                        <a href="../../clients/order/H" class="btn btn-danger">H</a>
                        <a href="../../clients/order/I" class="btn btn-danger">I</a>
                        <a href="../../clients/order/J" class="btn btn-danger">J</a>
                        <a href="../../clients/order/K" class="btn btn-danger">K</a>
                        <a href="../../clients/order/L" class="btn btn-danger">L</a>
                        <a href="../../clients/order/M" class="btn btn-danger">M</a>
                        <a href="../../clients/order/N" class="btn btn-danger">N</a>
                        <a href="../../clients/order/O" class="btn btn-danger">O</a>
                        <a href="../../clients/order/P" class="btn btn-danger">P</a>
                        <a href="../../clients/order/Q" class="btn btn-danger">Q</a>
                        <a href="../../clients/order/R" class="btn btn-danger">R</a>
                        <a href="../../clients/order/S" class="btn btn-danger">S</a>
                        <a href="../../clients/order/T" class="btn btn-danger">T</a>
                        <a href="../../clients/order/U" class="btn btn-danger">U</a>
                        <a href="../../clients/order/V" class="btn btn-danger">V</a>
                        <a href="../../clients/order/W" class="btn btn-danger">W</a>
                    </div>

                    <div class="panel-body">
                        <div class="col-md-8">
                            <a href="../../clients/order/X" class="btn btn-danger">X</a>
                            <a href="../../clients/order/Y" class="btn btn-danger">Y</a>
                            <a href="../../clients/order/Z" class="btn btn-danger">Z</a>
                            <a href="../../clients/order/1" class="btn btn-danger">1</a>
                            <a href="../../clients/order/2" class="btn btn-danger">2</a>
                            <a href="../../clients/order/3" class="btn btn-danger">3</a>
                            <a href="../../clients/order/4" class="btn btn-danger">4</a>
                            <a href="../../clients/order/5" class="btn btn-danger">5</a>
                            <a href="../../clients/order/6" class="btn btn-danger">6</a>
                            <a href="../../clients/order/7" class="btn btn-danger">7</a>
                            <a href="../../clients/order/8" class="btn btn-danger">8</a>
                            <a href="../../clients/order/9" class="btn btn-danger">9</a>
                            <a href="../../clients/order/0" class="btn btn-danger">0</a>
                        </div>
                        <div class="col-md-4">
                            <form class="form-horizontal" role="form" method="POST" action="/eventweek"
                                  enctype="multipart/form-data">
                                {{ csrf_field() }}
                                <div class="form-group{{ $errors->has('state') ? ' has-error' : '' }}">
                                    <label for="eventWeek" class="control-label">Event Week</label>
                                    <select id="eventWeek" name="eventWeek" class="form-control">
                                        @foreach($eventWeek::all() as $code => $name)
                                            <option value="{{ $code }}">{{ $name }}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
            @foreach($clients->chunk(4) as $clientgroup)
                <div style="margin-bottom: 30px;">
                    @foreach($clientgroup as $client)
                        <div class="col-md-3">
                        @include('clients.client-card-two',compact('client'))
                        <!--<li><a href="clients/{{ $client->id }}" class="clients">{{ $client->groupname }} {{ $client->id }}</a> Contact: {{ $client->firstname }} {{ $client->lastname }} Phone: {{ $client->contactphone }} Email: {{ $client->contactemail }}&nbsp;</li>-->
                        </div>
                    @endforeach
                </div>

            @endforeach
        </div>
        <div class="col-md-2"></div>
    </div>

    <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
            {{ $clients->render() }}
        </div>
        <div class="col-md-2"></div>
    </div>
@endsection