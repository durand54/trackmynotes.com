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
        '1'=>'Group is hot!',
        '2'=>'Group decision coming',
        '3'=>'Group turned down',
        '4'=>'Group to contract',
    );

    /**
     * @return array
     */
    public static function all()
    {
        return static::$clientTypes;
    }
}