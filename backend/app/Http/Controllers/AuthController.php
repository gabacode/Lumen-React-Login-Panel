<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;

class AuthController extends Controller
{
    /**
     * Store a new user.
     *
     * @param  Request  $request
     * @return Response
     */
    public function register(Request $request)
    {
        //validate incoming request
        $this->validate($request, [
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed',
        ]);

        try {
            $user = new User();
            $user->name = $request->input('name');
            $user->email = $request->input('email');
            $plainPassword = $request->input('password');
            $user->password = app('hash')->make($plainPassword);

            $user->save();

            return response()->json(
                [
                    'user' => $user,
                    'message' => 'Registrazione avvenuta con successo!',
                ],
                201
            );
        } catch (\Exception $e) {
            return response()->json(
                ['message' => 'Registrazione fallita..'],
                409
            );
        }
    }
    public function login(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|string',
            'password' => 'required|string',
        ]);

        $credentials = $request->only(['email', 'password']);

        if (!($token = Auth::attempt($credentials))) {
            return response()->json(['message' => 'Accesso Negato.'], 401);
        }

        return $this->respondWithToken($token);
    }
}
