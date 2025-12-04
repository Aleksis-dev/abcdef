<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

use Illuminate\Support\Facades\URL;

use Illuminate\Support\Facades\Auth;

class Authorization
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $exceptionTable = [
            ["http://127.0.0.1:8000/user/create", "GET"],
            ["http://127.0.0.1:8000/user", "POST"],
            ["http://127.0.0.1:8000/login", "POST"],
            ["http://127.0.0.1:8000/logout", "POST"],
        ];

        foreach ($exceptionTable as $item) {
            if (URL::current() === $item[0] && $_SERVER["REQUEST_METHOD"] == $item[1]) {
                return $next($request);
            }
        }

        if (!Auth::check()) {
            return redirect()->route("user.create");
        }

        return $next($request);
    }
}
