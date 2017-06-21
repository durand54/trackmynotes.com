<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Material Design Bootstrap</title>
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css">
    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <!-- Material Design Bootstrap -->
    <link href="css/mdb.min.css" rel="stylesheet">
    <!-- Your custom styles (optional) -->
    <link href="css/style.css" rel="stylesheet">
</head>

<body>

<!-- Start your project here-->
<div style="height: 100vh">
    <div class="flex-center flex-column">
        <h1 class="animated fadeIn mb-2">Material Design for Bootstrap</h1>

        <h5 class="animated fadeIn mb-1">Thank you for using our product. We're glad you're with us.</h5>

        <p class="animated fadeIn text-muted">MDB Team</p>

    </div>
</div>
<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-3">
        <!--Card-->
        <div class="card-wrapper">
            <div id="card-1" class="card-rotating effect__click">

                <!--Front Side-->
                <div class="face front">

                    <!-- Image-->
                    <div class="card-up">
                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%2859%29.jpg" class="img-fluid">
                    </div>
                    <!--Avatar-->
                    <div class="avatar"><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%289%29.jpg" class="rounded-circle img-responsive">
                    </div>
                    <!--Content-->
                    <div class="card-block">
                        <h4>Jonathan Doe</h4>
                        <p>Web developer</p>
                        <!--Triggering button-->
                        <a class="rotate-btn" data-card="card-1"><i class="fa fa-repeat"></i> Click here to rotate</a>
                    </div>
                </div>
                <!--/.Front Side-->

                <!--Back Side-->
                <div class="face back">

                    <!--Content-->
                    <h4>About me</h4>
                    <hr>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quae, dolores dicta. Blanditiis rem amet repellat, dolores nihil quae in mollitia asperiores ut rerum repellendus, voluptatum eum, officia laudantium quaerat?</p>
                    <hr>
                    <!--Social Icons-->
                    <ul class="inline-ul">
                        <li><a class="icons-sm fb-ic"><i class="fa fa-facebook"></i></a></li>
                        <li><a class="icons-sm tw-ic"><i class="fa fa-twitter"></i></a></li>
                        <li><a class="icons-sm gplus-ic"><i class="fa fa-google-plus"></i></a></li>
                        <li><a class="icons-sm li-ic"><i class="fa fa-linkedin"></i></a></li>
                    </ul>
                    <!--Triggering button-->
                    <a class="rotate-btn" data-card="card-1"><i class="fa fa-undo"></i> Click here to rotate back</a>

                </div>
                <!--/.Back Side-->

            </div>
        </div>
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
<!-- /Start your project here-->

<!-- SCRIPTS -->
<!-- JQuery -->
<script type="text/javascript" src="{{ mix('js/libs/jquery-3.1.1.min.js') }}"></script>
<!-- Bootstrap tooltips -->
<script type="text/javascript" src="{{ mix('js/libs/tether.min.js') }}"></script>
<!-- Bootstrap core JavaScript -->
<script type="text/javascript" src="{{ mix('js/libs/js/bootstrap.min.js') }}"></script>
<!-- MDB core JavaScript -->
<script type="text/javascript" src="{{ mix('js/libs/js/mdb.min.js') }}"></script>
</body>

</html>