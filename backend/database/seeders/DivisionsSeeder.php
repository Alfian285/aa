<?php

namespace Database\Seeders;

use App\Models\divisions;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DivisionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $divisions = [
            ['name' => 'Division 1'],
            ['name' => 'Division 2'],
            ['name' => 'Division 3'],
            // Tambahkan data divisi lainnya di sini sesuai kebutuhan
        ];

        // Looping melalui data divisi dan memasukkannya ke dalam database
        foreach ($divisions as $division) {
            divisions::create($division);
        }
    }
}
