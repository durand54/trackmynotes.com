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
            </div>
        </div>
    </div>
</div>

@endsection
