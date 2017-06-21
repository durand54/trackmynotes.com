<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateClientTable
 */
class CreateClientTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('client', function (Blueprint $table) {
            $table->increments('id');
            $table->string('propertyname');
            $table->string('groupname');
            $table->string('address1')->nullable();
            $table->string('address2')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('zip')->nullable();
            $table->string('phone')->nullable();
            $table->string('fax')->nullable();
            $table->string('tollfree')->nullable();
            $table->string('email')->nullable();
            $table->string('web')->nullable();
            $table->string('firstname')->nullable();
            $table->string('lastname')->nullable();
            $table->string('title')->nullable();
            $table->string('contactphone')->nullable();
            $table->string('contactext')->nullable();
            $table->string('contactemail')->nullable();
            $table->string('numdays');
            $table->string('numcatered')->nullable();
            $table->string('numNotcatered')->nullable();
            $table->string('numevents')->nullable();
            $table->string('assignment')->nullable();
            $table->string('lgstsqft')->nullable();
            $table->string('lgstname')->nullable();
            $table->string('todaysdate');
            $table->text('groupnotes')->nullable();
            $table->string('groupstatus');
            $table->string('eventweek');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('client');
    }
}
