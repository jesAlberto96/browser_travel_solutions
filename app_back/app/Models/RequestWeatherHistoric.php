<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RequestWeatherHistoric extends Model
{
    use HasFactory;

    protected $fillable = [
        'query',
        'response',
        'code',
    ];
}
