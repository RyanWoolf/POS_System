<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        \App\Models\User::factory()->create([
            'name' => 'Ryan',
            'login_id' => '102327',
            'password' => '3369',
            'is_admin' => true
        ]);
    }
}
