<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class UserController extends Controller
{
    public function login(Request $request)
    {
        if(Auth::attempt(['email' => $request->get('email'), 'password' => $request->get('password')]))
        {
            $user = Auth::user();
            $success['token'] =  $user->createToken('memeGenerator')-> accessToken;
            $success['name'] =  $user->name;

            return response()->json([
                'success' => $success
            ], 200);
        }else {
        return response()->json(['error'=>'Unauthorised User'], 401);
    }
    }

    public function details()
    {
        $user = Auth::user();
        return response()->json([
            'user' => $user,
        ], 200);
    }
}
