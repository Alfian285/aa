<?php

namespace App\Http\Controllers;

use App\Models\people;
use App\Http\Requests\StorepeopleRequest;
use App\Http\Requests\UpdatepeopleRequest;

class PeopleController extends Controller
{
    /**
     * Display a listing of the resource.
    */
    public function index()
    {
        $people = People::all();
        return response()->json($people);
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
    public function store(StorepeopleRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(people $people)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(people $people)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatepeopleRequest $request, people $people)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(people $people)
    {
        //
    }
}
