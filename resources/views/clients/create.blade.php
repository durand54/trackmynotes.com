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
                            <div class="col-md-5">
                                <div class="form-group{{ $errors->has('propertyName') ? ' has-error' : '' }}">
                                    <label for="propertyName" class="control-label">Property</label>
                                    <input id="propertyName" type="text" class="form-control" name="propertyName" value="{{ old('propertyName') }}" required autofocus>
                                    @if ($errors->has('propertyName'))
                                        <span class="help-block">
                	                    <strong>{{ $errors->first('propertyName') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            <div class="form-group{{ $errors->has('firstName') ? ' has-error' : '' }}">
                                <label class="control-label">Contact</label>
                                <hr>
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
                                <div class="form-group{{ $errors->has('title') ? ' has-error' : '' }}">
                                    <label for="title" class="control-label">Company Position</label>
                                    <input id="title" type="text" class="form-control" name="title" value="{{ old('title') }}" required autofocus>
                                    @if ($errors->has('title'))
                                        <span class="help-block"><strong>{{ $errors->first('title') }}</strong></span>
                                    @endif
                                </div>
                                <div class="form-group{{ $errors->has('contactEmail') ? ' has-error' : '' }}">
                                    <label for="contactEmail" class="control-label">Contact Email</label>
                                    <input id="contactEmail" type="text" class="form-control" name="contactEmail" value="{{ old('contactEmail') }}" required autofocus>
                                    @if ($errors->has('contactEmail'))
                                        <span class="help-block"><strong>{{ $errors->first('contactEmail') }}</strong></span>
                                    @endif
                                </div>
                                <div class="form-group{{ $errors->has('contactPhone') ? ' has-error' : '' }}">
                                    <label for="contactPhone" class="control-label">Contact Phone</label>
                                    <input id="contactPhone" type="text" class="form-control" name="contactPhone" value="{{ old('contactPhone') }}" required autofocus>
                                    @if ($errors->has('contactPhone'))
                                        <span class="help-block"><strong>{{ $errors->first('contactPhone') }}</strong></span>
                                    @endif
                                </div>
                                <div class="form-group{{ $errors->has('contactExt') ? ' has-error' : '' }}">
                                    <label for="contactExt" class="control-label">Contact Phone Ext.</label>
                                    <input id="contactExt" type="text" class="form-control" name="contactExt" value="{{ old('contactExt') }}" required autofocus>
                                    @if ($errors->has('contactExt'))
                                        <span class="help-block"><strong>{{ $errors->first('contactExt') }}</strong></span>
                                    @endif
                                </div>

                            </div>
                            <div class="col-md-1"></div>
                            <div class="col-md-5">
                                <div class="form-group{{ $errors->has('groupName') ? ' has-error' : '' }}">
                                    <label for="groupName" class="control-label">Group Name</label>
                                    <input id="groupName" type="text" class="form-control" name="groupName" value="{{ old('groupName') }}" required autofocus>
                                    @if ($errors->has('groupName'))
                                        <span class="help-block"><strong>{{ $errors->first('groupName') }}</strong></span>
                                    @endif
                                </div>
                                <div class="form-group{{ $errors->has('address1') ? ' has-error' : '' }}">
                                    <label for="address1" class="control-label">Group Address 1</label>
                                    <input id="address1" type="text" class="form-control" name="address1" value="{{ old('address1') }}" required autofocus>
                                    @if ($errors->has('address1'))
                                        <span class="help-block"><strong>{{ $errors->first('address1') }}</strong></span>
                                    @endif
                                </div>
                                <div class="form-group{{ $errors->has('address2') ? ' has-error' : '' }}">
                                    <label for="address2" class="control-label">Group Address 2</label>
                                    <input id="address2" type="text" class="form-control" name="address2" value="{{ old('address2') }}" required autofocus>
                                    @if ($errors->has('address2'))
                                        <span class="help-block"><strong>{{ $errors->first('address2') }}</strong></span>
                                    @endif
                                </div>
                                <div class="form-group{{ $errors->has('city') ? ' has-error' : '' }}">
                                    <label for="city" class="control-label">Group City</label>
                                    <input id="city" type="text" class="form-control" name="city" value="{{ old('city') }}" required autofocus>
                                    @if ($errors->has('city'))
                                        <span class="help-block"><strong>{{ $errors->first('city') }}</strong></span>
                                    @endif
                                </div>
                                <div class="form-group{{ $errors->has('state') ? ' has-error' : '' }}">
                                    <label for="state" class="control-label">Group State</label>
                                    <input id="state" type="text" class="form-control" name="state" value="{{ old('state') }}" required autofocus>
                                    @if ($errors->has('state'))
                                        <span class="help-block"><strong>{{ $errors->first('state') }}</strong></span>
                                    @endif
                                </div>
                            </div>
                            <div class="col-md-1"></div>
                            <div class="col-md-12">
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection