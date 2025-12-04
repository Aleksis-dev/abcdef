<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GuessImage extends Model
{
    public $fillable = ['url', 'x_cord', 'y_cord'];
}
