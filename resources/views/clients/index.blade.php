@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                @include('layouts.controls',compact('client'))
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-2">
            <!--Card-->

            <div class="fixed-action-btn" style="bottom: 45px; right: 24px;">
                <a class="btn-floating btn-large red">
                    <i class="large material-icons">mode_edit</i>
                </a>

                <ul>
                    <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
                    <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
                    <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
                    <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
                </ul>
            </div>
            <!--/.Card-->
        </div>
        <div class="col-md-5"></div>
    </div>
    <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">

                @foreach($clients->chunk(4) as $clientgroup)
                    <div style="margin-bottom: 30px;">
                        @foreach($clientgroup as $client)
                            <div class="col-md-3">
                                @include('clients.client-card',compact('client'))
                            </div>
                        @endforeach
                    </div>

                @endforeach


        </div>
        <div class="col-md-1"></div>
    </div>
    <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
            {{ $clients->render() }}
        </div>
        <div class="col-md-2"></div>
    </div>

@endsection