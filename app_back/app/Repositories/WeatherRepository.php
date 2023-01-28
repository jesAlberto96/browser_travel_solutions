<?php

namespace App\Repositories;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\RequestWeatherHistoric;

class WeatherHistoricRepository
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