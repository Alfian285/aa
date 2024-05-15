<?php
use App\Http\Controllers\DivisionsController;
use App\Http\Controllers\PollsController;
use App\Http\Controllers\usersController;
use App\Http\Middleware\AdminMiddleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
return $request->user();
});

Route::post('auth/login', [usersController::class, 'login']);

Route::middleware(['auth:api'])->group(function () {
Route::post('auth/me', [usersController::class, 'me']);
Route::post('auth/logout', [usersController::class, 'logout']);
Route::post('auth/reset-password', [usersController::class, 'reset']);

// Menetapkan rute untuk endpoint /poll ke PollsController::create
Route::post('poll', [PollsController::class, 'create'])->middleware("AdminOnly");
});