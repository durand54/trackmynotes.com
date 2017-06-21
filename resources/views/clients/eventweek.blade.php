@inject('eventWeek','TrackMyNotes\Http\Utilities\EventWeek');
@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                @include('layouts.controls',compact('client'))
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