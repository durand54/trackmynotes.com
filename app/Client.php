<?php

namespace TrackMyNotes;

use Illuminate\Database\Eloquent\Model;
use TrackMyNotes\Note;
use Laravel\Scout\Searchable;


/**
 * Class Client
 * @package TrackMyNotes
 */
class Client extends Model
{
    use Searchable;

    protected $table = 'client';
    protected $fillable = [
        'propertyname' , 'todaysdate' , 'firstname' , 'lastname' , 'title' , 'contactemail' , 'contactphone' , 'contactext' , 'groupname' ,
        'address1' , 'address2' , 'city' , 'state' , 'zip' , 'phone', 'fax' , 'tollfree' , 'email' , 'web' , 'numdays' ,
        'numcatered' , 'numnotcatered' , 'assignment' , 'numevents' , 'lgstsqft', 'lgstname' , 'groupnotes' , 'groupstatus','eventweek',
        'calldate','bookingdate','archive','systementered'
    ];
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function clientPhotos()
    {
        return $this->hasMany('TrackMyNotes\ClientPhoto');
    }

    /**
     *
     */
    public function notes()
    {
        return $this->belongsToMany(Note::class);
    }

    public static function withCallDate($date)
    {
        return static::leftJoin(
            'client_note',
            'client.id', '=', 'client_note.client_id'
        );
    }

}
