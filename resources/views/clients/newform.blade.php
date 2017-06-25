@inject('states','TrackMyNotes\Http\Utilities\States');
@inject('clients','TrackMyNotes\Http\Utilities\ClientType');
{{ csrf_field() }}
<div class="col-md-12" style="padding-left: 0px;">
    <div class="col-md-11">
        <div class="form-group">
            <label class="control-label header">New Entry - {{ $todayDate }}</label>
            <hr>
        </div>
        <input type="hidden" name="groupstatus" value="New Lead" >
        <input type="hidden" name="todaysdate" value="{{ $todayDate }}" >
        <div class="form-group{{ $errors->has('groupname') ? ' has-error' : '' }}">
            <label for="groupname" class="control-label">Group Name</label>
            <input id="groupname" type="text" class="form-control" name="groupname"
                   value="{{ old('groupname') }}" >
            @if ($errors->has('groupname'))
                <span class="help-block"><strong>{{ $errors->first('groupname') }}</strong></span>
            @endif
        </div>
        <div class="form-group{{ $errors->has('firstname') ? ' has-error' : '' }}">
            <label for="firstname" class="control-label">Contact's First Name</label>
            <input id="firstname" type="text" class="form-control" name="firstname"
                   value="{{ old('firstname') }}" >
        </div>
        <div class="form-group{{ $errors->has('lastname') ? ' has-error' : '' }}">
            <label for="lastname" class="control-label">Contact's Last Name</label>
            <input id="lastname" type="text" class="form-control" name="lastname"
                   value="{{ old('lastname') }}" >
        </div>
        <div class="form-group{{ $errors->has('title') ? ' has-error' : '' }}">
            <label for="title" class="control-label">Company Position</label>
            <input id="title" type="text" class="form-control" name="title"
                   value="{{ old('title') }}" >
        </div>
        <div class="form-group{{ $errors->has('contactemail') ? ' has-error' : '' }}">
            <label for="contactemail" class="control-label">Contact Email</label>
            <input id="contactemail" type="text" class="form-control" name="contactemail"
                   value="{{ old('contactemail') }}" >
        </div>
        <div class="form-group{{ $errors->has('contactphone') ? ' has-error' : '' }}">
            <label for="contactphone" class="control-label">Contact Phone</label>
            <input id="contactphone" type="text" class="form-control" name="contactphone"
                   value="{{ old('contactphone') }}" >
        </div>
        <div class="form-group{{ $errors->has('city') ? ' has-error' : '' }}">
            <label for="city" class="control-label">Group City</label>
            <input id="city" type="text" class="form-control" name="city"
                   value="{{ old('city') }}" >
        </div>
        <div class="form-group{{ $errors->has('state') ? ' has-error' : '' }}">
            <label for="state" class="control-label">Group State</label>
            <select id="state" name="state" class="form-control">
                @foreach($states::all() as $code => $name)
                    <option value="{{ $code }}">{{ $name }}</option>
                @endforeach
            </select>
        </div>

        <div class="form-group">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </div>
</div>