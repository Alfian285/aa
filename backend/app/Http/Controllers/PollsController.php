<?php

namespace App\Http\Controllers;

use App\Helper\ResponseFormatter;
use App\Models\polls;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PollsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $polls = new polls();
        return ResponseFormatter::success($polls->all(), "Successfuly getting data");       
    }

    // /**
    //  * Show the form for creating a new resource.
    //  */
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string',
            'description' => 'required|string',
            'deadline' => 'required|date',
            'choices' => 'required|array|min:2',
            'choices.*' => 'string|unique:choices,choice',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'The given data was invalid.'], 422);
        }
        $user = Auth()->user();

        // Create new poll
        $poll = new Polls();
        $poll->title = $request->title;
        $poll->description = $request->description;
        $poll->deadline = $request->deadline;
        $poll->created_by = $user->id;
        $poll->save();

        // Attach choices to the poll
        $poll->choices()->createMany(array_map(function ($choice) use ($poll) {
            return [
                'choice' => $choice,
                'poll_id' => $poll->id,
                'created_at' => now(),
                'updated_at' => now()
            ];
        }, $request->choices));

        return response()->json($poll, 200);    
        }

    // /**
    //  * Store a newly created resource in storage.
    //  */
    // public function store(StorepollsRequest $request)
    // {
    //     //
    // }

    // /**
    //  * Display the specified resource.
    //  */
    // public function show(polls $polls)
    // {
    //     //
    // }

    // /**
    //  * Show the form for editing the specified resource.
    //  */
    // public function edit(polls $polls)
    // {
    //     //
    // }

    // /**
    //  * Update the specified resource in storage.
    //  */
    // public function update(UpdatepollsRequest $request, polls $polls)
    // {
    //     //
    // }

    // /**
    //  * Remove the specified resource from storage.
    //  */
    // public function destroy(polls $polls)
    // {
    //     //
    // }
}
