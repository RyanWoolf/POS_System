<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FoodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */


    
    public function run()
    {
        $foods = [
            // Entrees
            [
                'name' => 'Warm house marinated olives',
                'price' => 7,
                'is_GF' => true,
                'is_DF' => true,
                'is_VT' => true
            ],
            [
                'name' => 'Warm house mixed nuts',
                'price' => 6,
                'is_VG' => true,
                'is_DF' => true
            ],
            [
                'name' => 'House sourdough',
                'price' => 6,
                'is_VT' => true
            ],
            [
                'name' => 'Manchego fritter',
                'price' => 7,
                'is_VT' => true
            ],
            [
                'name' => 'Warm house marinated olives',
                'price' => 7,
                'is_GF' => true,
                'is_DF' => true
            ],

            // Mains
            [
                'name' => 'Quinoa salad',
                'price' => 16,
                'is_GF' => true,
                'is_VG' => true
            ],
            [
                'name' => 'Grilled calamari',
                'price' => 17,
                'is_GF' => true,
                'is_DF' => true
            ],
            [
                'name' => 'Charcuterie plate',
                'price' => 22,
            ],
            [
                'name' => 'Pappardelle',
                'price' => 24,
            ],
            [
                'name' => 'Fish of the day',
                'price' => 28,
                'is_DF' => true
            ],
            [
                'name' => 'Roast chicken',
                'price' => 28,
                'is_GF' => true,
            ],
            [
                'name' => 'Chargrilled sirloin steak',
                'price' => 35,
                'is_DF' => true
            ],

            // Sides
            [
                'name' => 'Green beans',
                'price' => 8,
                'is_GF' => true,
                'is_DF' => true
            ],
            [
                'name' => 'Spring salad',
                'price' => 8,
                'is_DF' => true
            ],
            [
                'name' => 'Hand cut chips',
                'price' => 8,
                'is_GF' => true,
                'is_DF' => true
            ],

            // Desserts
            [
                'name' => 'White chocolate pannacotta',
                'price' => 16,
            ],
            [
                'name' => 'Pavlova',
                'price' => 16,
            ],
            [
                'name' => 'Affogato',
                'price' => 16,
                'is_GF' => true
            ],
    
        ];
        // Food seeds
        foreach ($foods as $food) {
            DB::table('foods')->insert($food);
        }
    }
}
