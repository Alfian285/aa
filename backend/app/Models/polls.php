<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\users;
use App\Models\votes;
use App\Models\choices;

class polls extends Model
{
    use HasFactory;
    protected $table = "polls";

    protected $fillable = [
        "title",
        "description",
        "deadline",
        "created_by"
    ];
    public function users(){
        return $this->belongsTo(users::class);
    }
    public function votes(){
        return $this->hasMany(votes::class);
    }
    public function choices(){
        return $this->hasMany(choices::class, 'poll_id');
    }

}
