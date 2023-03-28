<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $seatNumbers = [4, 4, 4, 6, 6, 2, 2, 2, 2, 4, 4, 4, 6, 6, 2, 2, 2, 2, 4, 4, 4, 6, 6, 2, 2, 2, 2];
        function creatingTables($number, $seats) {
            return \App\Models\Table::factory()->create([
                    'Number' => $number,
                    'Seats' => $seats
                ]);
        };

        for ($i=0; $i<27; $i++) {
            creatingTables($i+1, $seatNumbers[$i]);
        };
        
    }
}
