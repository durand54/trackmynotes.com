<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddFieldsToClientTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('client', function (Blueprint $table) {

            $table->dateTime('bookingdate')->nullable;
            $table->dateTime('calldate')->nullable;
            $table->integer('archive');
            $table->integer('systementered');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('client', function (Blueprint $table) {
            $table->dropColumn('bookingdate');
            $table->dropColumn('calldate');
            $table->dropColumn('archive');
            $table->dropColumn('systementered');

        });
    }
}
