<?php

namespace TrackMyNotes\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ClientRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'propertyname' => 'required',
            'todaysdate' => 'required',
            'groupname' => 'required',
            'numdays' => 'required',
            'groupstatus' => 'required'
        ];
    }
}
