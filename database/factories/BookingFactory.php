<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Booking>
 */
class BookingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            // 'first_name' => fake()->name(),
            // 'login_id' => '102724', 
            // // 'email_verified_at' => now(),
            // 'password' => '3369', // password
            // 'remember_token' => Str::random(10),
        ];
    }
}
