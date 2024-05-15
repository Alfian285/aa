<?php

namespace App\Http\Controllers;

use App\Helper\ResponseFormatter;
use App\Models\users;
use App\Http\Requests\StoreusersRequest;
use App\Http\Requests\UpdateusersRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function login(StoreusersRequest $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return ResponseFormatter::error("username or password empty");
        }
        $credentials = $request->only('username', 'password');

        if (!$token = auth()->guard('api')->attempt($credentials)) {
            return ResponseFormatter::error(NULL, "Unauthorized", 401);
        }
        return ResponseFormatter::success([
            'user' => auth()->guard('api')->user(),
            'token' => $token
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function logout()
    {
        Auth::logout();
        $token = JWTAuth::getToken();
        JWTAuth::invalidate($token);
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function me()
    {
        $user = Auth()->user();
        
        
        return response()->json($user);
    }

    /**
     * Display the specified resource.
     */
    public function reset(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'OldPassword' => 'required',
            'NewPassword' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors(),
            ], 400);
        }

        $user = Auth::users();

        if (!Hash::check($request->OldPassword, $user->password)) {
            return response()->json([
                'status' => 'error',
                'message' => 'Old password is incorrect',
            ], 400);
        }

        // Update password baru
        $user->password = Hash::make($request->NewPassword);
        $user->save();
        $token = JWTAuth::getToken();
        JWTAuth::invalidate($token);


        return response()->json([
            'status' => 'success',
            'message' => 'Password has been updated successfully',
        ]);
    }
    
}



