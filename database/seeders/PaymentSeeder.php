<?php

namespace Database\Seeders;

use App\Models\Payment;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PaymentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Payment::insert([
            'method' => 'Cash'
        ],[
            'method' => 'Card'
        ],[
            'method' => 'Prepaid'
        ],[
            'method' => 'Account'
        ]);
    }
}
