<?php

namespace TrackMyNotes;

use Illuminate\Database\Eloquent\Model;


/**
 * Class Client
 * @package TrackMyNotes
 */
class Client extends Model
{
    protected $table = 'client';
    protected $fillable = [
        'propertyName' , 'todaysDate' , 'firstName' , 'lastName' , 'title' , 'contactEmail' , 'contactPhone' , 'contactExt' , 'groupName' , 'address1' , 'address2' , 'city' , 'state' , 'zip' , 'phone',
        'fax' , 'tollFree' , 'email' , 'web' , 'numDays' , 'numCatered' , 'numNotCatered' , 'assignment' , 'numEvents' , 'lgstSQft' , 'lgstName' , 'groupNotes' , 'groupStatus'
    ];
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function clientPhotos()
    {
        return $this->hasMany('TrackMyNotes\ClientPhoto');
    }


}
