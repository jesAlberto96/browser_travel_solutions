<?php

namespace App\Repositories;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class API
{

    public function GET($url) 
    {
        $this->errors = [];
        $curl = curl_init();

        $header = array('Accept: application/json');

        curl_setopt_array($curl, array(
            CURLOPT_URL => "{$url}",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
            CURLOPT_HTTPHEADER => $header,
        ));

        $response = curl_exec($curl);
        curl_close($curl);

        return $response;
    }
}