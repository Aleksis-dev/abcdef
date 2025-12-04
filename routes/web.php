<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\GameController;

Route::resource('/user', UserController::class);
Route::post("/login", [UserController::class, 'login']);
Route::post("/logout", [UserController::class, 'logout']);
Route::get("/leaderboard", [GameController::class, 'fetchLeaderboard']);
Route::get("/play", [GameController::class, 'playGame']);
Route::post('/saveIMG', [ImageController::class, 'uploadFile']);
Route::post("/submit", [GameController::class, 'submitGuess']);