<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('food', function (Blueprint $table) {
            $table->id('id');
            $table->string('name');
            $table->integer('price');
            $table->boolean('is_GF')->default(false);
            $table->boolean('is_DF')->default(false);
            $table->boolean('is_VG')->default(false);
            $table->boolean('is_VT')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('food');
    }
};
