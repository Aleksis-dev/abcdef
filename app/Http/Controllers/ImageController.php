<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\GuessImage;

use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    public function uploadFile() {
        $path = Storage::putFile('GuessImages', new File('C:\Users\User\lastovskis\uploads\2.jpg'), 'public');

        GuessImage::create([
            'url' => asset(Storage::url($path)),
            'x_cord' => 25,
            'y_cord' => 25
        ]);
    }
}
