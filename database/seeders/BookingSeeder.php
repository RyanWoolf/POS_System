<?php

namespace Database\Seeders;

use App\Models\Booking;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

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
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
            'date' => '09/02/2024',
            'time' => Carbon::parse('11:00 AM'),
            'pax' => 4,
            'comment' => 'Booking test',
            'customer_id' => 1,
            'table_id' => 3
        ]);
    }
}
