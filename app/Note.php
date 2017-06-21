<?php

namespace TrackMyNotes;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use Carbon\Carbon;

class Note extends Model
{
    use Searchable;
    protected $fillable = [ 'note' , 'groupname', 'completed','calldate','status' ];
    public function client()
    {
        return $this->belongsToMany(Client::class);
    }

    /**
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'groupname';
    }
}
