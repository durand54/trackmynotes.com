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
        '1'=>'Group has not been contacted',
        '2'=>'LVM',
        '3'=>'VM',
        '4'=>'Send',
        '5'=>'Sent',
        '6'=>'Hot',
        '7'=>'Prospect',
        '8'=>'Cold',
        '9'=>'Dead',
        '10'=>'Turned Down',
        '11'=>'Return Call',
        '12'=>'Call Date Set',
        '13'=>'Sent Information',
        '14'=>'Potential is weak',
        '15'=>'Potential is strong',
        '16'=>'No Potential',
        '17'=>'Group decision coming',
        '18'=>'Needs to be contacted',
        '19'=>'Contract sent'
    );

    /**
     * @return array
     */
    public static function all()
    {
        return static::$clientTypes;
    }
}