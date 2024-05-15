<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\choices;
use App\Models\polls;
class votes extends Model
{
    use HasFactory;
    protected $table = "votes";

    protected $fillable = [
        "choice_id",
        "user_id",
        "poll_id",
        "division_id"
        
    ];
    public function choices(){
    return $this->belongsTo(choices::class);
}
    public function polls(){
        return $this->belongsTo(polls::class);
    }
    public function users(){
        return $this->hasOne(users::class);
    }
    
}
