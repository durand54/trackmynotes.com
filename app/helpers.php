<?php

/**
 * Flash Helper
 * @param  string|null  $title
 * @param  string|null  $text
 * @return void
 */
function flash($title = null, $text = null)
{
    $flash = app('TrackMyNotes\Http\Flash');

    if (func_num_args() == 0) {
        return $flash;
    }

    return $flash->info($title, $text);
}