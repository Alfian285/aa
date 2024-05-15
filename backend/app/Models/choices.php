<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\votes;
class choices extends Model
{
    use HasFactory;
    protected $table = "choices";
    protected $fillable = ['choice', 'poll_id'];

    public function votes()
    {
        return $this->belongsTo(votes::class);
    }
    public function poll(){
        return $this->belongsTo(Polls::class); // Sesuaikan kunci asing dengan 'poll_id'
    }
}
