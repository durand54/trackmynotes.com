@inject('states','TrackMyNotes\Http\Utilities\States');
@inject('clients','TrackMyNotes\Http\Utilities\ClientType');
{{ csrf_field() }}
<div class="col-md-12" style="padding-left: 0px;">
    <div class="col-md-5">
        <div class="form-group">
            <label class="control-label">Hotel</label>
            <hr>
        </div>
        <div class="form-group{{ $errors->has('propertyName') ? ' has-error' : '' }}">
            <label for="propertyName" class="control-label">Property</label>
            <input id="propertyName" type="text" class="form-control" name="propertyName"
                   value="{{ old('propertyName') }}" required autofocus>
            @if ($errors->has('propertyName'))
                <span class="help-block">
                	                    <strong>{{ $errors->first('propertyName') }}</strong>
                                    </span>
            @endif
        </div>
    </div>
    <div class="col-md-1"></div>
    <div class="col-md-5">
        <div class="form-group">
            <label class="control-label">Today</label>
            <hr>
        </div>
        <div class="form-group{{ $errors->has('todaysDate') ? ' has-error' : '' }}">
            <label for="todaysDate" class="control-label">Date</label>
            <input class="form-control" type="date" value="{{ old('todaysDate') }}"
                   id="todaysDate" name="todaysDate" required autofocus>
            @if ($errors->has('todaysDate'))
                <span class="help-block">
                	                    <strong>{{ $errors->first('todaysDate') }}</strong>
                                    </span>
            @endif
        </div>
    </div>
    <div class="col-md-1"></div>
</div>
<div class="col-md-5">
    <div class="form-group{{ $errors->has('firstName') ? ' has-error' : '' }}">
        <label class="control-label">Contact</label>
        <hr>
        <label for="firstName" class="control-label">First Name</label>


        <input id="firstName" type="text" class="form-control" name="firstName"
               value="{{ old('firstName') }}" autofocus>

        @if ($errors->has('firstName'))
            <span class="help-block">
                                        <strong>{{ $errors->first('firstName') }}</strong>
                                    </span>
        @endif
    </div>
    <div class="form-group{{ $errors->has('lastName') ? ' has-error' : '' }}">
        <label for="lastName" class="control-label">Last Name</label>


        <input id="lastName" type="text" class="form-control" name="lastName"
               value="{{ old('lastName') }}" autofocus>

        @if ($errors->has('lastName'))
            <span class="help-block">
                                        <strong>{{ $errors->first('lastName') }}</strong>
                                    </span>
        @endif

    </div>
    <div class="form-group{{ $errors->has('title') ? ' has-error' : '' }}">
        <label for="title" class="control-label">Company Position</label>
        <input id="title" type="text" class="form-control" name="title"
               value="{{ old('title') }}" required autofocus>
        @if ($errors->has('title'))
            <span class="help-block"><strong>{{ $errors->first('title') }}</strong></span>
        @endif
    </div>
    <div class="form-group{{ $errors->has('contactEmail') ? ' has-error' : '' }}">
        <label for="contactEmail" class="control-label">Contact Email</label>
        <input id="contactEmail" type="text" class="form-control" name="contactEmail"
               value="{{ old('contactEmail') }}" required autofocus>
        @if ($errors->has('contactEmail'))
            <span class="help-block"><strong>{{ $errors->first('contactEmail') }}</strong></span>
        @endif
    </div>
    <div class="form-group{{ $errors->has('contactPhone') ? ' has-error' : '' }}">
        <label for="contactPhone" class="control-label">Contact Phone</label>
        <input id="contactPhone" type="text" class="form-control" name="contactPhone"
               value="{{ old('contactPhone') }}" required autofocus>
        @if ($errors->has('contactPhone'))
            <span class="help-block"><strong>{{ $errors->first('contactPhone') }}</strong></span>
        @endif
    </div>
    <div class="form-group{{ $errors->has('contactExt') ? ' has-error' : '' }}">
        <label for="contactExt" class="control-label">Contact Phone Ext.</label>
        <input id="contactExt" type="text" class="form-control" name="contactExt"
               value="{{ old('contactExt') }}" autofocus>
        @if ($errors->has('contactExt'))
            <span class="help-block"><strong>{{ $errors->first('contactExt') }}</strong></span>
        @endif
    </div>

</div>
<div class="col-md-1"></div>
<div class="col-md-5">
    <div class="form-group">
        <label class="control-label">Group</label>
        <hr>
    </div>
    <div class="form-group{{ $errors->has('groupName') ? ' has-error' : '' }}">
        <label for="groupName" class="control-label">Group Name</label>
        <input id="groupName" type="text" class="form-control" name="groupName"
               value="{{ old('groupName') }}" required autofocus>
        @if ($errors->has('groupName'))
            <span class="help-block"><strong>{{ $errors->first('groupName') }}</strong></span>
        @endif
    </div>
    <div class="form-group{{ $errors->has('address1') ? ' has-error' : '' }}">
        <label for="address1" class="control-label">Group Address 1</label>
        <input id="address1" type="text" class="form-control" name="address1"
               value="{{ old('address1') }}" required autofocus>
        @if ($errors->has('address1'))
            <span class="help-block"><strong>{{ $errors->first('address1') }}</strong></span>
        @endif
    </div>
    <div class="form-group{{ $errors->has('address2') ? ' has-error' : '' }}">
        <label for="address2" class="control-label">Group Address 2</label>
        <input id="address2" type="text" class="form-control" name="address2"
               value="{{ old('address2') }}" required autofocus>
        @if ($errors->has('address2'))
            <span class="help-block"><strong>{{ $errors->first('address2') }}</strong></span>
        @endif
    </div>
    <div class="form-group{{ $errors->has('city') ? ' has-error' : '' }}">
        <label for="city" class="control-label">Group City</label>
        <input id="city" type="text" class="form-control" name="city"
               value="{{ old('city') }}" required autofocus>
        @if ($errors->has('city'))
            <span class="help-block"><strong>{{ $errors->first('city') }}</strong></span>
        @endif
    </div>
    <div class="form-group{{ $errors->has('state') ? ' has-error' : '' }}">
        <label for="state" class="control-label">Group State</label>
        <select id="state" name="state" class="form-control">
            @foreach($states::all() as $code => $name)
                <option value="{{ $code }}">{{ $name }}</option>
            @endforeach
        </select>

        @if ($errors->has('state'))
            <span class="help-block"><strong>{{ $errors->first('state') }}</strong></span>
        @endif
    </div>
    <div class="form-group{{ $errors->has('zip') ? ' has-error' : '' }}">
        <label for="zip" class="control-label">Group Zip/Postal Code</label>
        <input id="zip" type="text" class="form-control" name="zip" value="{{ old('zip') }}"
               required autofocus>
        @if ($errors->has('zip'))
            <span class="help-block"><strong>{{ $errors->first('zip') }}</strong></span>
        @endif
    </div>
    <div class="form-group{{ $errors->has('phone') ? ' has-error' : '' }}">
        <label for="phone" class="control-label">Group Phone</label>
        <input id="phone" type="text" class="form-control" name="phone"
               value="{{ old('phone') }}" required autofocus>
        @if ($errors->has('phone'))
            <span class="help-block"><strong>{{ $errors->first('phone') }}</strong></span>
        @endif
    </div>
    <div class="form-group{{ $errors->has('fax') ? ' has-error' : '' }}">
        <label for="fax" class="control-label">Group Fax</label>
        <input id="fax" type="text" class="form-control" name="fax" value="{{ old('fax') }}"
               autofocus>
        @if ($errors->has('fax'))
            <span class="help-block"><strong>{{ $errors->first('fax') }}</strong></span>
        @endif
    </div>
    <div class="form-group{{ $errors->has('tollFree') ? ' has-error' : '' }}">
        <label for="tollFree" class="control-label">Group Toll Free Phone Number</label>
        <input id="tollFree" type="text" class="form-control" name="tollFree"
               value="{{ old('tollFree') }}" autofocus>
        @if ($errors->has('tollFree'))
            <span class="help-block"><strong>{{ $errors->first('tollFree') }}</strong></span>
        @endif
    </div>
    <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
        <label for="email" class="control-label">Group Email</label>
        <input id="email" type="text" class="form-control" name="email"
               value="{{ old('email') }}" required autofocus>
        @if ($errors->has('email'))
            <span class="help-block"><strong>{{ $errors->first('email') }}</strong></span>
        @endif
    </div>
    <div class="form-group{{ $errors->has('web') ? ' has-error' : '' }}">
        <label for="web" class="control-label">Group Web Address</label>
        <input id="web" type="text" class="form-control" name="web" value="{{ old('web') }}"
               required autofocus>
        @if ($errors->has('web'))
            <span class="help-block"><strong>{{ $errors->first('web') }}</strong></span>
        @endif
    </div>
</div>
<div class="col-md-1"></div>
<div class="col-md-12" style="padding-left: 0px;">
    <div class="col-md-5">
        <div class="form-group">
            <label class="control-label">Event Information</label>
            <hr>
        </div>
    </div>
</div>
<div class="col-md-5">
    <div class="form-group{{ $errors->has('numDays') ? ' has-error' : '' }}">
        <label for="numDays" class="control-label">Number of Days</label>
        <input id="numDays" type="text" class="form-control" name="numDays"
               value="{{ old('numDays') }}" required autofocus>
        @if ($errors->has('numDays'))
            <span class="help-block"><strong>{{ $errors->first('numDays') }}</strong></span>
        @endif
    </div>

    <div class="form-group{{ $errors->has('numCatered') ? ' has-error' : '' }}">
        <label for="numCatered" class="control-label">Number of Catered Events</label>
        <input id="numCatered" type="text" class="form-control" name="numCatered"
               value="{{ old('numCatered') }}" required autofocus>
        @if ($errors->has('numCatered'))
            <span class="help-block"><strong>{{ $errors->first('numCatered') }}</strong></span>
        @endif
    </div>
    <div class="form-group{{ $errors->has('numNotCatered') ? ' has-error' : '' }}">
        <label for="numNotCatered" class="control-label">Number of Non-Catered
            Events</label>
        <input id="numNotCatered" type="text" class="form-control" name="numNotCatered"
               value="{{ old('numNotCatered') }}" required autofocus>
        @if ($errors->has('numNotCatered'))
            <span class="help-block"><strong>{{ $errors->first('numNotCatered') }}</strong></span>
        @endif
    </div>
    <div class="form-group{{ $errors->has('assignment') ? ' has-error' : '' }}">
        <label for="assignment" class="control-label">Assignment</label>
        <input id="assignment" type="text" class="form-control" name="assignment"
               value="{{ old('assignment') }}" required autofocus>
        @if ($errors->has('assignment'))
            <span class="help-block"><strong>{{ $errors->first('assignment') }}</strong></span>
        @endif
    </div>
</div>
<div class="col-md-1"></div>
<div class="col-md-5">
    <div class="form-group{{ $errors->has('numEvents') ? ' has-error' : '' }}">
        <label for="numEvents" class="control-label">Number of Events</label>
        <input id="numEvents" type="text" class="form-control" name="numEvents"
               value="{{ old('numEvents') }}" required autofocus>
        @if ($errors->has('numEvents'))
            <span class="help-block"><strong>{{ $errors->first('numEvents') }}</strong></span>
        @endif
    </div>
    <div class="form-group{{ $errors->has('lgstSQft') ? ' has-error' : '' }}">
        <label for="lgstSQft" class="control-label">Largest Square Feet</label>
        <input id="lgstSQft" type="text" class="form-control" name="lgstSQft"
               value="{{ old('lgstSQft') }}" required autofocus>
        @if ($errors->has('lgstSQft'))
            <span class="help-block"><strong>{{ $errors->first('lgstSQft') }}</strong></span>
        @endif
    </div>
    <div class="form-group{{ $errors->has('lgstName') ? ' has-error' : '' }}">
        <label for="lgstName" class="control-label">Largest Room</label>
        <input id="lgstName" type="text" class="form-control" name="lgstName"
               value="{{ old('lgstName') }}" required autofocus>
        @if ($errors->has('lgstName'))
            <span class="help-block"><strong>{{ $errors->first('lgstName') }}</strong></span>
        @endif
    </div>
</div>
<div class="col-md-1"></div>
<div class="col-md-12" style="padding-left: 0px;">

    <div class="col-md-5">
        <div class="form-group{{ $errors->has('groupNotes') ? ' has-error' : '' }}">
            <label for="groupNotes" class="control-label">Event Notes</label>
            <textarea class="form-control" id="exampleTextarea" rows="10" id="'groupNotes"
                      name="groupNotes">{{ old('groupNotes') }}</textarea>
        </div>
    </div>
    <div class="col-md-1"></div>
    <div class="col-md-5">
        <fieldset class="form-group">
            <label for="groupStatus" class="control-label">Group Status</label>
            <select id="groupStatus" name="groupStatus" class="form-control">
                @foreach($clients::all() as $code => $name)
                    <option value="{{ $name }}">{{ $name }}</option>
                @endforeach
            </select>
       <!-- <div class="form-group">
            <label for="groupPhotos" class="control-label">Photos</label>
            <input type="file" name="groupPhotos" id="groupPhotos" class="form-control"
                   value="{{ old('groupPhotos')  }}">

        </div>-->
    </div>
    <div class="col-md-1"></div>
</div>

<div class="col-md-12">
    <div class="form-group">
        <button type="submit" class="btn btn-primary">Submit</button>
    </div>
</div>