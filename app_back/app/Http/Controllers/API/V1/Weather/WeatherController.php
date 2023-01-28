<?php

namespace App\Http\Controllers\API\V1\Weather;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\API;
use App\Repositories\WeatherRepository;
use App\Http\Controllers\ResponseController;

class WeatherController extends Controller
{
    public function __construct()
    {
        $this->response = new ResponseController;
        $this->API = new API;
        $this->weatherRepository = new WeatherRepository;
    }

    public function getWheater($query)
    {
        try {
            $response = json_decode($this->API->GET("https://api.openweathermap.org/data/2.5/weather?q=$query&APPID=63b93d38aa11f6d8547e1dde018e5a89"));

            $this->weatherRepository->create([
                "query" => $query,
                "response" => json_encode($response),
                "code" => $response->cod,
            ]);

            if ($response->cod != 200){
                return $this->response->sendError("city not found", $response->cod);
            }

            return $this->response->sendResponse($response);
        } catch (Exception $ex) {
            return $this->response->sendError("Ocurrio un error inesperado al intentar procesar la solicitud", 500);
        }
    }

    public function getAll(){
        return $this->response->sendResponse($this->weatherRepository->getAll());
    }
}
