@inject('states','TrackMyNotes\Http\Utilities\States');
@inject('clients','TrackMyNotes\Http\Utilities\ClientType');
{{ csrf_field() }}
<div class="col-md-12" style="padding-left: 0px;">
    <div class="col-md-5">
        <div class="form-group">
            <label class="header">Last Event Hotel</label>
            <hr>
        </div>
        <div class="form-group{{ $errors->has('propertyname') ? ' has-error' : '' }}">
            <label for="propertyname" class="control-label">Property</label>
            <input id="propertyname" type="text" class="form-control" name="propertyname"
                   value="{{ $client->propertyname }}" required autofocus>
        </div>
    </div>
    <div class="col-md-1"></div>
    <div class="col-md-5">
        <div class="form-group">
            <label class="header">Dates</label>
            <hr>
        </div>
        <div class="form-group{{ $errors->has('todaysdate') ? ' has-error' : '' }}">
            <label for="todaysdate" class="control-label">Last Event Date</label>
            <input placeholder="Selected date" type="text" id="todaysdate" class="form-control disabled" name="todaysdate"
                   value="{{ $client->todaysdate  }}">
        </div>
        <div class="form-group{{ $errors->has('calldate') ? ' has-error' : '' }}">
            <label for="calldate" class="control-label">Call Back Date</label>
            @if($client->calldate == '0000-00-00 00:00:00'){
             <input placeholder="Selected date" type="text" id="calldate" class="form-control datepickerTwo" name="calldate"
                   value="">
            @else
            <input placeholder="Selected date" type="text" id="calldate" class="form-control datepickerTwo" name="calldate"
                                                value="{{ date('F d, Y', strtotime($client->calldate)) }}">
            @endif
        </div>
        <div class="form-group{{ $errors->has('bookingdate') ? ' has-error' : '' }}">
            <label for="bookingdate" class="control-label">Date Booked</label>
                @if($client->bookingdate == '0000-00-00 00:00:00'){
                <input placeholder="Selected date" type="text" id="bookingdate" class="form-control datepickerThree" name="bookingdate"
                                                value="">
                @else
                <input placeholder="Selected date" type="text" id="bookingdate" class="form-control datepickerThree" name="bookingdate"
                       value="{{ date('F d, Y', strtotime($client->bookingdate)) }}">
                @endif
        </div>
        <div class="form-group" style="width: 100%;">
            <label class="control-label" for="systementered" >Entered Into System {{ $client->systementered }}</label>
            <div class="controls">
                <div class="make-switch" tabindex="0">
                    @if( $client->systementered == 1)
                    <input class="systementeredcompleted" type="checkbox" name="systementered" value="{{ $client->systementered }}" checked data-off-text="NO" data-on-text="YES" data-off-color="danger" data-on-color="success" data-size="large">
                    @else
                        <input class="systementeredcompleted" type="checkbox" name="systementered" value="{{ $client->systementered }}" data-off-text="NO" data-on-text="YES" data-off-color="danger" data-on-color="success" data-size="large">
                    @endif
                </div>
            </div>
        </div><div class="form-group" style="width: 100%;">
            <label class="control-label" for="archive" >Archive this record {{ $client->archive }}</label>
            <div class="controls">
                <div class="make-switch" tabindex="0">
                    @if( $client->archive == 1)
                    <input class="archivecompleted" type="checkbox" name="archive" value="{{ $client->archive }}" checked  data-off-text="NO" data-on-text="YES" data-off-color="danger" data-on-color="success" data-size="large">
                        @else
                    <input class="archivecompleted" type="checkbox" name="archive" value="{{ $client->archive }}"  data-off-text="NO" data-on-text="YES" data-off-color="danger" data-on-color="success" data-size="large">
                    @endif
                </div>
            </div>
        </div>
    </div>


    <div class="col-md-1"></div>
</div>
<div class="col-md-5">
    <div class="form-group{{ $errors->has('firstname') ? ' has-error' : '' }}">
        <label class="header">Contact</label>
        <hr>
        <label for="firstname" class="control-label">First Name</label>
        <input id="firstname" type="text" class="form-control" name="firstname"
               value="{{ $client->firstname }}" >
    </div>
    <div class="form-group{{ $errors->has('lastname') ? ' has-error' : '' }}">
        <label for="lastname" class="control-label">Last Name</label>
        <input id="lastname" type="text" class="form-control" name="lastname"
               value="{{ $client->lastname }}" >
    </div>
    <div class="form-group{{ $errors->has('title') ? ' has-error' : '' }}">
        <label for="title" class="control-label">Company Position</label>
        <input id="title" type="text" class="form-control" name="title"
               value="{{ $client->title }}" >
    </div>
    <div class="form-group{{ $errors->has('contactemail') ? ' has-error' : '' }}">
        <label for="contactemail" class="control-label">Contact Email</label>
        <input id="contactemail" type="text" class="form-control" name="contactemail"
               value="{{ $client->contactemail }}" >
    </div>
    <div class="form-group{{ $errors->has('contactphone') ? ' has-error' : '' }}">
        <label for="contactphone" class="control-label">Contact Phone</label>
        <input id="contactphone" type="text" class="form-control" name="contactphone"
               value="{{ $client->contactphone }}" >
    </div>
    <div class="form-group{{ $errors->has('contactext') ? ' has-error' : '' }}">
        <label for="contactext" class="control-label">Contact Phone Ext.</label>
        <input id="contactext" type="text" class="form-control" name="contactext"
               value="{{ $client->contactext }}" >
    </div>

</div>
<div class="col-md-1"></div>
<div class="col-md-5">
    <div class="form-group">
        <label class="header">Group</label>
        <hr>
    </div>
    <div class="form-group{{ $errors->has('groupname') ? ' has-error' : '' }}">
        <label for="groupname" class="control-label">Group Name</label>
        <input id="groupname" type="text" class="form-control" name="groupname"
               value="{{ $client->groupname }}" required >
    </div>
    <div class="form-group{{ $errors->has('address1') ? ' has-error' : '' }}">
        <label for="address1" class="control-label">Group Address 1</label>
        <input id="address1" type="text" class="form-control" name="address1"
               value="{{ $client->address1 }}" required >
    </div>
    <div class="form-group{{ $errors->has('address2') ? ' has-error' : '' }}">
        <label for="address2" class="control-label">Group Address 2</label>
        <input id="address2" type="text" class="form-control" name="address2"
               value="{{ $client->address2 }}" >
    </div>
    <div class="form-group{{ $errors->has('city') ? ' has-error' : '' }}">
        <label for="city" class="control-label">Group City</label>
        <input id="city" type="text" class="form-control" name="city"
               value="{{ $client->city }}" required >
    </div>
    <div class="form-group{{ $errors->has('state') ? ' has-error' : '' }}">
        <label for="state" class="control-label">Group State</label>
        <select id="state" name="state" class="form-control">
            @foreach($states::all() as $code => $name)
                @if(  $client->state == $code )
                    <option value="{{ $code  }}">{{ $name }}</option>
                @endif
            @endforeach
            @foreach($states::all() as $code => $name)
                <option value="{{ $code }}">{{ $name }}</option>
            @endforeach
        </select>
    </div>
    <div class="form-group{{ $errors->has('zip') ? ' has-error' : '' }}">
        <label for="zip" class="control-label">Group Zip/Postal Code</label>
        <input id="zip" type="text" class="form-control" name="zip" value="{{ $client->zip }}"
               >
    </div>
    <div class="form-group{{ $errors->has('phone') ? ' has-error' : '' }}">
        <label for="phone" class="control-label">Group Phone</label>
        <input id="phone" type="text" class="form-control" name="phone"
               value="{{ $client->phone }}" >
    </div>
    <div class="form-group{{ $errors->has('fax') ? ' has-error' : '' }}">
        <label for="fax" class="control-label">Group Fax</label>
        <input id="fax" type="text" class="form-control" name="fax" value="{{ $client->fax }}"
               >
    </div>
    <div class="form-group{{ $errors->has('tollfree') ? ' has-error' : '' }}">
        <label for="tollfree" class="control-label">Group Toll Free Phone Number</label>
        <input id="tollfree" type="text" class="form-control" name="tollfree"
               value="{{ $client->tollfree }}" >
    </div>
    <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
        <label for="email" class="control-label">Group Email</label>
        <input id="email" type="text" class="form-control" name="email"
               value="{{ $client->email }}" >
    </div>
    <div class="form-group{{ $errors->has('web') ? ' has-error' : '' }}">
        <label for="web" class="control-label">Group Web Address</label>
        <input id="web" type="text" class="form-control" name="web" value="{{ $client->web }}"
               >
    </div>
</div>
<div class="col-md-1"></div>
<div class="col-md-12" style="padding-left: 0px;">
    <div class="col-md-5">
        <div class="form-group">
            <label class="header">Event Information</label>
            <hr>
        </div>
    </div>
</div>
<div class="col-md-12" style="padding-left: 0px;">
<div class="col-md-5">
    <div class="form-group{{ $errors->has('numdays') ? ' has-error' : '' }}">
        <label for="numdays" class="control-label">Number of Days</label>
        <input id="numdays" type="text" class="form-control" name="numdays"
               value="{{ $client->numdays }}" >
    </div>

    <div class="form-group{{ $errors->has('numcatered') ? ' has-error' : '' }}">
        <label for="numcatered" class="control-label">Number of Catered Events</label>
        <input id="numcatered" type="text" class="form-control" name="numcatered"
               value="{{ $client->numcatered }}" >
    </div>
    <div class="form-group{{ $errors->has('numnotcatered') ? ' has-error' : '' }}">
        <label for="numnotcatered" class="control-label">Number of Non-Catered
            Events</label>
        <input id="numnotcatered" type="text" class="form-control" name="numnotcatered"
               value="{{ $client->numnotcatered }}" >
    </div>
    <div class="form-group{{ $errors->has('assignment') ? ' has-error' : '' }}">
        <label for="assignment" class="control-label">Assignment</label>
        <input id="assignment" type="text" class="form-control" name="assignment"
               value="{{ $client->assignment }}" >
    </div>
</div>
<div class="col-md-1"></div>
<div class="col-md-5">
    <div class="form-group{{ $errors->has('numevents') ? ' has-error' : '' }}">
        <label for="numevents" class="control-label">Number of Events</label>
        <input id="numevents" type="text" class="form-control" name="numevents"
               value="{{ $client->numevents }}" >
    </div>
    <div class="form-group{{ $errors->has('lgstsqft') ? ' has-error' : '' }}">
        <label for="lgstsqft" class="control-label">Largest Square Feet</label>
        <input id="lgstsqft" type="text" class="form-control" name="lgstsqft"
               value="{{ $client->lgstsqft }}" >
    </div>
    <div class="form-group{{ $errors->has('lgstname') ? ' has-error' : '' }}">
        <label for="lgstname" class="control-label">Largest Room</label>
        <input id="lgstname" type="text" class="form-control" name="lgstname"
               value="{{ $client->lgstname }}" >
    </div>
</div>
<div class="col-md-1"></div>
</div>
<div class="col-md-12" style="padding-left: 0px;">

    <div class="col-md-5">
        <div class="form-group{{ $errors->has('groupnotes') ? ' has-error' : '' }}">
            <label for="groupnotes" class="control-label">Event Notes</label>
            <textarea class="form-control" id="exampleTextarea" rows="10" id="'groupnotes"
                      name="groupnotes">{{ $client->groupnotes }}</textarea>
        </div>
    </div>
    <div class="col-md-1"></div>
    <div class="col-md-5">
        <fieldset class="form-group">
            <label for="groupstatus" class="control-label">Group Status</label>
            <select id="groupstatus" name="groupstatus" class="form-control">
                @foreach($clients::all() as $code => $name)
                    @if(  $client->groupstatus == $name )
                        <option value="{{ $name  }}">{{ $name }}</option>
                    @endif
                @endforeach
                @foreach($clients::all() as $code => $name)
                    <option value="{{ $name }}">{{ $name }}</option>
                @endforeach
            </select>
        <!-- <div class="form-group">
            <label for="groupPhotos" class="control-label">Photos</label>
            <input type="file" name="groupPhotos" id="groupPhotos" class="form-control"
                   value="{{ $client->groupPhotos }}">

        </div>-->
    </div>
    <div class="col-md-1"></div>
</div>

<div class="col-md-12">
    <div class="form-group">
        <button type="submit" class="btn btn-primary">Submit</button>
    </div>
</div>