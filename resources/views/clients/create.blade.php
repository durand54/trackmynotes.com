
@extends('layouts.app')
@section('content')
    <div class="jumbotron" xmlns="http://www.w3.org/1999/html" style="padding: 0;">
        <h1>Create A New Client</h1>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <form class="form-horizontal" role="form" method="POST" action="/clients"
                              enctype="multipart/form-data">
                            @include('clients.newform');
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