<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Users;
use App\Models\Divisions;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $divisions = Divisions::all();

        $users = [
            [
                'username' => 'admin3',
                'password' => bcrypt('1'),
                'role' => 'admin',
                'division_id' => $divisions->random()->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'username' => 'admin4',
                'password' => bcrypt('1'),
                'role' => 'admin',
                'division_id' => $divisions->random()->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'username' => 'user3',
                'password' => bcrypt('1'),
                'role' => 'member',
                'division_id' => $divisions->random()->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'username' => 'user4',
                'password' => bcrypt('password2'),
                'role' => 'member',
                'division_id' => $divisions->random()->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Tambahkan data pengguna lainnya di sini sesuai kebutuhan
        ];

        // Looping melalui data pengguna dan memasukkannya ke dalam database
        foreach ($users as $user) {
            Users::create($user);
        }
    }
}
