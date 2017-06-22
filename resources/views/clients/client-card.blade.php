@inject('clientStatus','TrackMyNotes\Http\Utilities\ClientType');
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
                <h3><a href="clients/{{ $client->id }}" class="clients">{{ $client->groupname }}</a></h3>
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
                    @else
                    @if( ! empty($client['email']))
                        <p>Email Co.: {{ $client->email }}</p>
                        @else
                        @if( ! empty($client['web']))
                            <p>Web: <a href="{{ $client->web }}" target="_blank">{{ $client->groupname }}</a></p>
                        @endif
                    @endif
                @endif
                    <p style="font-weight: 600; margin-top: 5px;">Last Event Hotel:</p>
                    <p>{{ $client->propertyname }}</p>
                    <p style="font-weight: 600; margin-top: 5px;">Last Event Week:</p>
                    <p>{{ $client->todaysdate }}</p>
                <!--Triggering button-->
                <a class="rotate-btn" data-card="card-{{ $client->id }}"><i class="fa fa-repeat"></i></a>
            </div>
        </div>
        <!--/.Front Side-->

        <!--Back Side-->
        <div class="face back">

            <!--Content-->
            <h4>Last Note</h4>
            <ul class="list-group-card-back">
                @foreach($client->notes as $k => $v)
                    @if($loop->last)
                        <li class="list-group-item back-card-notes">{{ $v->note }}{{ $v->status }}<br>{{ date('F d, Y', strtotime($v->calldate)) }}</li>
                    @endif
                @endforeach
            </ul>
            <div class="card-back-form">
                <form class="form-group-card-back" role="form" method="POST" action="/client/{{ $client->id }}/note">
                    <div class="form-group">
                        <input type="hidden" name="id" value="{{ $client->id }}" >
                        <input type="hidden" name="groupname" value="{{ $client->groupname }}" >
                        <label for="note" class="card-back-label">Note</label>
                        <div class="card-back-input"><input id="note" type="text" class="form-control" name="note"
                               value="" required autofocus>
                            <label for="status" class="card-back-label">Status</label>
                            <select id="status" name="status" class="form-control">
                                @foreach($clientStatus::all() as $code => $name)
                                    <option value="{{ $name }}">{{ $name }}</option>
                                @endforeach
                            </select>
                        </div>
                            <label for="calldate" class="card-back-label">Call Date</label>
                        <div class="card-back-input"><input placeholder="Selected date" type="text" id="calldate" class="form-control datepicker" name="calldate"
                                                            value="{{ old('calldate') }}"></div>
                            <label class="card-back-label" for="completed" >Completed</label>
                            <div class="controls">
                                <div class="make-switch" tabindex="0">
                                    <input class="completed" type="checkbox" name="completed" value="" data-off-text="INCOMPLETE" data-on-text="COMPLETE" data-off-color="danger" data-on-color="success" data-size="mini">
                                </div>
                            </div>
                        {{ csrf_field() }}
                        <button type="submit" class="btn btn-primary">Submit A Note</button>
                    </div>
                </form>
            </div>
            <a class="rotate-btn" data-card="card-{{ $client->id }}"><i class="fa fa-undo"></i></a>

        </div>
        <!--/.Back Side-->

    </div>
</div>