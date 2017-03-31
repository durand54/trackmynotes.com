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
            $table->string('propertyName');
            $table->string('todaysDate');
            $table->string('firstName')->nullable();
            $table->string('lastName')->nullable();
            $table->string('title')->nullable();
            $table->string('contactEmail')->nullable();
            $table->string('contactPhone')->nullable();
            $table->string('contactExt')->nullable();
            $table->string('groupName');
            $table->string('address1')->nullable();
            $table->string('address2')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('zip')->nullable();
            $table->string('phone')->nullable();
            $table->string('fax')->nullable();
            $table->string('tollFree')->nullable();
            $table->string('email')->nullable();
            $table->string('web')->nullable();
            $table->string('numDays');
            $table->string('numCatered')->nullable();
            $table->string('numNotCatered')->nullable();
            $table->string('assignment')->nullable();
            $table->string('numEvents')->nullable();
            $table->string('lgstSQft')->nullable();
            $table->string('lgstName')->nullable();
            $table->text('groupNotes')->nullable();
            $table->string('groupStatus');
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
