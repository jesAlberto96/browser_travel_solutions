<?php

namespace App\Repositories;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\RequestWeatherHistoric;

class WeatherRepository
{

    public function getAll() 
    {
        return RequestWeatherHistoric::all();
    }

    public function create($data)
    {
        return RequestWeatherHistoric::create($data);
    }
}