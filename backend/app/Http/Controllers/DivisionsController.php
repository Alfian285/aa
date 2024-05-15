<?php

namespace App\Http\Controllers;

use App\Models\divisions;
use App\Http\Requests\StoredivisionsRequest;
use App\Http\Requests\UpdatedivisionsRequest;

class DivisionsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return "a";
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
    public function store(StoredivisionsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(divisions $divisions)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(divisions $divisions)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatedivisionsRequest $request, divisions $divisions)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(divisions $divisions)
    {
        //
    }
}
