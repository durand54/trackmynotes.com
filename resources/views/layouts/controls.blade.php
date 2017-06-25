@inject( 'eventWeek' , 'TrackMyNotes\Http\Utilities\EventWeek' );
@inject( 'alphabet' , 'TrackMyNotes\Http\Utilities\AlphabetChoices' );
@inject( 'clientType' , 'TrackMyNotes\Http\Utilities\ClientType' );
<div class="panel panel-default">
    <div class="panel-heading">{{ Auth::user()->name }}'s Dashboard</div>

    <div class="panel-body">
        <a href="clients/create" class="btn btn-primary">Enter New Client</a>
        <a href="/clientsNew" class="btn btn-outline-danger">New Leads</a>
        <a href="/clientsRecent" class="btn btn-success">Recent</a>
        <a href="/clientsHot" class="btn btn-danger">Hot</a>
        <a href="/clientsTodayCalls" class="btn btn-primary">Today's Calls</a>
        <a href="/clientsCalls" class="btn btn-primary">Call</a>
        <a href="/clientsTurnDown" class="btn btn-primary">Turn Downs</a>
        <a href="/clientsArchive" class="btn btn-primary">Archive</a>
    </div>
    <div class="panel-body">

        <div class="col-md-4">
            <div style="width: 90%;">
                <form class="form-horizontal" role="form" method="GET" action="/searchAlpha"
                      enctype="multipart/form-data">
                    {{ csrf_field() }}
                    <div class="form-group{{ $errors->has('alphabet') ? ' has-error' : '' }}">
                        <label for="alphabet" class="control-label">Choose Search Letter</label>
                        <select id="alphabet" name="alphabet" class="form-control">
                            @foreach($alphabet::all() as $code => $name)
                                <option value="{{ $name }}">{{ $name }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-md-4">
            <div style="width: 90%;">
                <form class="form-horizontal" role="form" method="GET" action="/eventweek"
                      enctype="multipart/form-data">
                    {{ csrf_field() }}
                    <div class="form-group{{ $errors->has('state') ? ' has-error' : '' }}">
                        <label for="eventWeek" class="control-label">Event Week</label>
                        <select id="eventWeek" name="eventWeek" class="form-control">
                            @foreach($eventWeek::all() as $code => $name)
                                <option value="{{ $code }}">{{ $name }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-md-4">
            <div style="width: 90%;">
                <form class="form-horizontal" role="form" method="GET" action="/clientTypes"
                      enctype="multipart/form-data">
                    {{ csrf_field() }}
                    <div class="form-group{{ $errors->has('state') ? ' has-error' : '' }}">
                        <label for="clientType" class="control-label">Client Status</label>
                        <select id="clientType" name="clientType" class="form-control">
                            @foreach($clientType::all() as $code => $name)
                                <option value="{{ $name }}">{{ $name }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>