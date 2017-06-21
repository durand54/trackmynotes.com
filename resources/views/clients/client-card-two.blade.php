<div class="card-wrapper">
    <div id="card-{{ $client->id }}" class="card-rotating effect__click">

        <!--Front Side-->
        <div class="face front">

            <!-- Company name-->
            @if( $client->groupstatus == "Group has not been contacted")
            <div class="card-up">
                @else
            <div class="card-up-two">
                @endif
                <h3><a href="../../clients/{{ $client->id }}" class="clients">{{ $client->groupname }}</a></h3>
            </div>
            <!--Content-->
            <div class="card-block">
                @if( ! empty($client['firstname'] ))
                    <h4>{{ $client->firstname }} {{ $client->lastname }}</h4>
                @endif
                @if( ! empty($client['contactphone'] ))
                    <p>Phone: {{ $client->contactphone }}</p>
                @else
                    @if( ! empty($client['phone']))
                        <p>Company #: {{ $client->phone }}</p>
                    @endif
                @endif
                @if( ! empty($client['contactemail'] ))
                    <p>Email: {{ $client->contactemail }}</p>
            @endif
            <!--Triggering button-->
                <a class="rotate-btn" data-card="card-{{ $client->id }}"><i class="fa fa-repeat"></i> Click here to rotate</a>
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
            <a class="rotate-btn" data-card="card-{{ $client->id }}"><i class="fa fa-undo"></i> Click here to rotate back</a>

        </div>
        <!--/.Back Side-->

    </div>
</div>