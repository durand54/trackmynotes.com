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
            $table->string('firstName');
            $table->string('lastName');
            $table->string('title')->nullable()->change();
            $table->string('contactEmail');
            $table->string('contactPhone');
            $table->string('contactExt')->nullable()->change();
            $table->string('groupName');
            $table->string('address1');
            $table->string('address2')->nullable()->change();
            $table->string('city');
            $table->string('state');
            $table->string('zip');
            $table->string('phone');
            $table->string('fax')->nullable()->change();
            $table->string('tollFree')->nullable()->change();
            $table->string('email')->nullable()->change();
            $table->string('web')->nullable()->change();
            $table->string('numDays');
            $table->string('numCatered')->nullable()->change();
            $table->string('numNotCatered')->nullable()->change();
            $table->string('assignment')->nullable()->change();
            $table->string('numEvents')->nullable()->change();
            $table->string('lgstSQft')->nullable()->change();
            $table->string('lgstName')->nullable()->change();
            $table->text('groupNotes')->nullable()->change();
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
