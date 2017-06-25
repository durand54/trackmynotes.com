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
        '1'=>'New Lead',
        '2'=>'Group has not been contacted',
        '3'=>'LVM',
        '4'=>'VM',
        '5'=>'Send',
        '6'=>'Sent',
        '7'=>'Hot',
        '8'=>'Prospect',
        '9'=>'Cold',
        '10'=>'Dead',
        '11'=>'Turned Down',
        '12'=>'Return Call',
        '13'=>'Call Date Set',
        '14'=>'Sent Information',
        '15'=>'Potential is weak',
        '16'=>'Potential is strong',
        '17'=>'No Potential',
        '18'=>'Group decision coming',
        '19'=>'Needs to be contacted',
        '20'=>'Contract sent'
    );

    /**
     * @return array
     */
    public static function all()
    {
        return static::$clientTypes;
    }
}