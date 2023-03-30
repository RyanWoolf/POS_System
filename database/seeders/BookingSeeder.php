<?php

namespace Database\Seeders;

use App\Models\Booking;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BookingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Booking::insert([
            'date' => '09/02/2024',
            'time' => '09:00 AM',
            'pax' => 4,
            'comment' => 'Booking test',
            'customer_id' => 1,
            'table_id' => 3
        ]);
    }
}
