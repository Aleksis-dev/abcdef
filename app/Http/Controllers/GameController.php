<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Middleware\Authorization;
use Illuminate\Support\Facades\DB;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class GameController extends Controller
{
    public static function middleware(): array
    {
        return [
            Authorization::class
        ];
    }

    public function fetchLeaderboard() {
        $user = Auth::user();

        $user->makeHidden(['x_cord', 'y_cord']);

        return Inertia::render('User/index', [
            'user' => $user,
            'window' => 'leaderboard',
            'extra' => DB::table('users')->select('name', 'points')->orderBy("points", "desc")->get()
        ]);
    }

    public function playGame() {
        $user = Auth::user();

        if (!$user->img_url) {
            $randomImage = DB::table("guess_images")->inRandomOrder()->first();
            $user->img_url = $randomImage->url;
            $user->x_cord = $randomImage->x_cord;
            $user->y_cord = $randomImage->y_cord;

            $user->save();
        }

        $user->makeHidden(['x_cord', 'y_cord']);

        return Inertia::render('User/index', [
            'user' => $user,
            'window' => 'maingame',
            'extra' => ""
        ]);
    }

    public function submitGuess(Request $request) {
        $user = Auth::user();

        $validated = $request->validate([
            "x" => "required",
            "y" => "required"
        ]);

        $userX = $user->x_cord;
        $userY = $user->y_cord;

        $calcX = abs(($userX - $validated["x"]));
        $calcY = abs(($userY - $validated["y"]));

        $pyth = sqrt(($calcX * $calcX + $calcY * $calcY));

        $user->img_url = null;
        $user->x_cord = null;
        $user->y_cord = null;
        $user->save();

        return $pyth;
    }
}
