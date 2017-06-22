<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'TrackMyNotes') }}</title>

    <!-- Styles -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css">
    <!-- Bootstrap core CSS -->
    <link href="/mdb/css/bootstrap.css" rel="stylesheet">
    <!-- Material Design Bootstrap -->
    <link href="/mdb/css/mdb.css" rel="stylesheet">
    <!-- Your custom styles (optional) -->
    <link href="/mdb/css/style.css" rel="stylesheet">
    <link href="{{ mix('/css/libs/bootstrap-switch.css') }}" rel="stylesheet">

    <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
    <link href="{{ mix('/css/libs.css') }}" rel="stylesheet">


    <!-- Scripts -->
    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>

</head>
<body>
    <div id="app">
        <nav class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">

                    <!-- Collapsed Hamburger -->
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                        <span class="sr-only">Toggle Navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <!-- Branding Image -->
                    <a class="navbar-brand" href="{{ url('/') }}">
                        {{ config('app.name', 'TrackMyNotes') }}
                    </a>
                    <ul class="nav">
                        <!-- Authentication Links -->
                    @if (Auth::guest())
                        @else

                            <li><a href="{{ route('clients.index') }}">Dashboard</a></li>
                                <li><a href="{{ route('clients.create') }}">Create New Client</a></li>

                    @endif
                </div>

                <div class="collapse navbar-collapse" id="app-navbar-collapse">
                    <!-- Left Side Of Navbar -->
                    <ul class="nav navbar-nav">
                        &nbsp;
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="nav navbar-nav navbar-right">
                        <!-- Authentication Links -->
                        @if (Auth::guest())
                            <li><a href="{{ route('login') }}">Login</a></li>
                            <!--<li><a href="{{ route('register') }}">Register</a></li>-->
                        @else
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                    {{ Auth::user()->name }}
                                </a>

                                <ul class="dropdown-menu" role="menu">
                                    <li>
                                        <a href="{{ route('logout') }}"
                                            onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                            Logout
                                        </a>

                                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                            {{ csrf_field() }}
                                        </form>
                                    </li>
                                </ul>
                            </li>
                        @endif
                    </ul>
                </div>
            </div>
        </nav>
    <div id="picker-container">
        @yield('content')
    </div>
    </div>
    <footer>
        <p style="float: right; margin-right: 10; color: #FFFFFF;">© 2017 TrackMyNotes powered by <img src="/images/Algolia_logo_bg-white.jpg" title="Algolia" height="20px"/></p>
    </footer>
    <!-- Scripts -->
    <!--<script   src="https://code.jquery.com/jquery-3.2.1.min.js"   integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="   crossorigin="anonymous"></script>

    <script src="{{ mix('js/app.js') }}"></script>
    <script src="{{ mix('js/libs.js') }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/select2.min.js"></script>
    <script src="{{ mix('js/libs/bootstrap-switch.min.js') }}"></script>-->

    <script type="text/javascript" src="/mdb/js/jquery-3.1.1.min.js"></script>
    <!-- Bootstrap tooltips -->
    <script type="text/javascript" src="/mdb/js/tether.min.js"></script>
    <!-- Bootstrap core JavaScript -->
    <script type="text/javascript" src="/mdb/js/bootstrap.min.js"></script>
    <!-- MDB core JavaScript -->
    <script type="text/javascript" src="/mdb/js/mdb.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-switch/3.3.2/js/bootstrap-switch.min.js"></script>

    <script src="{{ mix('js/libs.js') }}"></script>

    <script>
        // Material Select Initialization
        $(document).ready(function() {
            $('.mdb-select').material_select();
            $('.datepicker').pickadate(
                {
                    format: 'mmmm dd,yyyy',
                    formatSubmit: 'yyyy-mm-dd',
                    hiddenName: 'calldate',
                    hiddenSuffix: '',
                    container: ''
                }
            );
            $('.datepickerTwo').pickadate(
                {
                    format: 'mmmm dd,yyyy',
                    formatSubmit: 'yyyy-mm-dd',
                    hiddenName: 'calldate',
                    hiddenSuffix: '',
                    container: ''
                }
            );
            $('.datepickerThree').pickadate(
                {
                    format: 'mmmm dd,yyyy',
                    formatSubmit: 'yyyy-mm-dd',
                    hiddenName: 'bookingdate',
                    hiddenSuffix: '',
                    container: ''
                }
            );
        });
        // Data Picker Initialization
        $('.completed').bootstrapSwitch();

        var y=0;
        $(".completed").val(y);
        $('.completed').on('switchChange.bootstrapSwitch', function (event, state) {

            var x=1;//$(this).data('on-text');
            var y=0;//$(this).data('off-text');
            if($(".completed").is(':checked')) {
                $(".completed").val(x);
            } else {
                $(".completed").val(y);
            }
        });

        $('.archivecompleted').bootstrapSwitch();

        var y=0;
        $(".archivecompleted").val(y);
        $('.archivecompleted').on('switchChange.bootstrapSwitch', function (event, state) {

            var x=1;//$(this).data('on-text');
            var y=0;//$(this).data('off-text');
            if($(".archivecompleted").is(':checked')) {
                $(".archivecompleted").val(x);
                $(".archivecompleted").bootstrapSwitch('setState',true);
            } else {
                $(".archivecompleted").val(y);
                $(".archivecompleted").bootstrapSwitch('setState',false);
            }
        });

        $('.systementeredcompleted').bootstrapSwitch();

        var y=0;
        $(".systementeredcompleted").val(y);
        $('.systementeredcompleted').on('switchChange.bootstrapSwitch', function (event, state) {

            var x=1;//$(this).data('on-text');
            var y=0;//$(this).data('off-text');
            if($(".systementeredcompleted").is(':checked')) {
                $(".systementeredcompleted").val(x);
                $('.systementeredcompleted').bootstrapSwitch('setState',true);
            } else {
                $(".systementeredcompleted").val(y);
                $('.systementeredcompleted').bootstrapSwitch('setState',false);
            }
        });
        //# sourceURL=pen.js
    </script>
    @include('flash')



</body>
</html>
