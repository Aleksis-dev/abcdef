<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

use App\Models\User;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Middleware\Authorization;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class UserController extends Controller implements HasMiddleware
{
    
    public static function middleware(): array
    {
        return [
            Authorization::class
        ];
    }

    public function index()
    {
        $user = Auth::user();

        $user->makeHidden(['x_cord', 'y_cord']);

        return Inertia::render('User/index', [
            'user' => $user,
            'window' => 'dashboard',
            'extra' => null
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("User/auth");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        $validated = $request->validated();

        $user = User::create($validated);

        Auth::login($user);

        return redirect()->route('user.index');
    }

    public function login(Request $request) {
        $validated = $request->validate([
            'email' => 'required',
            'password' => 'required|min:8'
        ]);

        if (Auth::attempt($validated)) {
            $request->session()->regenerate();

            return redirect()->route('user.index');
        }

        return back()->withErrors([
            'message' => 'invalid credentials.'
        ]);
    }

    public function logout() {
        Auth::logout();

        return redirect()->route("user.create");
    }
}
