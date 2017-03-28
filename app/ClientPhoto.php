<?php

namespace TrackMyNotes;

use Illuminate\Database\Eloquent\Model;

class ClientPhoto extends Model
{
    protected $table = 'client_photos';
    protected $fillable = [
        'groupPhotoPath' , 'client_id'
    ];
    public function client()
    {
        return $this->belongsTo('TrackMyNotes\Client');
    }
}
