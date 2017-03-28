<?php
namespace TrackMyNotes\Http;
class Flash {
    public function create($title, $message, $notice, $key = 'flash_message')
    {
        session()->flash($key, [
           'title' => $title,
            'message' => $message,
            'notice' => $notice
        ]);
    }

    public function info($title, $message)
    {
        return $this->create($title, $message, 'info');
    }

    public function success($title, $message)
    {
        return $this->create($title, $message, 'success');
    }

    public function error($title, $message)
    {
        return $this->create($title, $message, 'error');
    }

    public function overlay($title, $message, $notice = 'success')
    {
        return $this->create($title, $message, $notice, 'flash_message_overlay');
    }
/*    public function message($title, $message, $notice)
    {
        session()->flash('flash_message', [
            'title' => $title,
            'message' => $message,
            'notice'  => $notice
        ]);
    }*/
}