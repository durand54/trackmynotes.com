@extends('layouts.app')
@section('content')
    <div class="jumbotron">
        <h1>Create A New Client</h1>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <form class="form-horizontal" role="form" method="POST" action="{{ route('login') }}">
                        {{ csrf_field() }}
                            <div class="col-md-6">
                            <div class="form-group{{ $errors->has('firstName') ? ' has-error' : '' }}">
                                <label for="firstName" class="control-label">First Name</label>


                                    <input id="firstName" type="text" class="form-control" name="firstName" value="{{ old('firstName') }}" required autofocus>

                                    @if ($errors->has('firstName'))
                                        <span class="help-block">
                                        <strong>{{ $errors->first('firstName') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            <div class="form-group{{ $errors->has('lastName') ? ' has-error' : '' }}">
                                <label for="lastName" class="control-label">Last Name</label>


                                    <input id="lastName" type="text" class="form-control" name="lastName" value="{{ old('firstName') }}" required autofocus>

                                    @if ($errors->has('lastName'))
                                        <span class="help-block">
                                        <strong>{{ $errors->first('lastName') }}</strong>
                                    </span>
                                    @endif

                            </div>
                            </div>
                            <div class="col-md-6">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection