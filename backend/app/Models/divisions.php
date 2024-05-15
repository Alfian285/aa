<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\users;
use App\Models\votes;

class divisions extends Model
{
    use HasFactory;
    protected $table = "divisions";

    protected $fillable = [
        "name",
       
    ];
    public function users(){
        return $this->hasMany(users::class);
    }
    public function divisions(){
        return $this->hasMany(votes::class);
    }
}
