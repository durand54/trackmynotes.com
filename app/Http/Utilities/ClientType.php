<?php
/**
 * Created by PhpStorm.
 * User: durand
 * Date: 3/17/17
 * Time: 2:11 PM
 */

namespace TrackMyNotes\Http\Utilities;


class ClientType
{
    protected static $clientTypes = array(
        '1'=>'Needs to be contract',
        '2'=>'LVM',
        '3'=>'Sent Information',
        '4'=>'Potential is weak',
        '5'=>'Potential is strong',
        '6'=>'No Potential',
        '7'=>'Group is hot!',
        '8'=>'Group decision coming',
        '9'=>'Group turned down',
    );

    /**
     * @return array
     */
    public static function all()
    {
        return static::$clientTypes;
    }
}