<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\votes;
use App\Models\polls;
use App\Models\divisions;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class users extends Authenticatable implements JWTSubject

{
    use HasFactory, Notifiable;

    protected $table = "users";

    protected $fillable = [
        "username",
        "role",
        "divisions_id"
    ];

    protected $casts = [
        "password" => 'hashed',
    ];

    public function polls(){
        return $this->hasMany(polls::class);
    }
    
    public function votes(){
        return $this->hasOne(votes::class);
    }
    
    public function divisions(){
        return $this->belongsTo(divisions::class);
    }

    public function isAdmin()
    {
        // You can define your logic here to determine if the user is an admin.
        // For example, if you have an 'is_admin' column in your users table:
        // return $this->is_admin;

        // Alternatively, you might have a role-based system:
        // return $this->role === 'admin';

        // Example: Assuming 'role' is a column in your users table:
        return $this->role === 'admin';
    }
    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }
}
