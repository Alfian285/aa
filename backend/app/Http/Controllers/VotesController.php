<?php

namespace App\Http\Controllers;

use App\Models\votes;
use App\Http\Requests\StorevotesRequest;
use App\Http\Requests\UpdatevotesRequest;

class VotesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorevotesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(votes $votes)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(votes $votes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatevotesRequest $request, votes $votes)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(votes $votes)
    {
        //
    }
}
