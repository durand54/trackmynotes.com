<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNotesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notes', function (Blueprint $table) {
            $table->increments('id');
            $table->string('note')->unique();
            $table->integer('completed');
            $table->string('groupname');
            $table->timestamps();
        });
        Schema::create('client_note', function (Blueprint $table) {

            $table->integer('note_id');
            $table->integer('client_id');
            $table->primary(['client_id', 'note_id']);
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
        Schema::dropIfExists('notes');
        Schema::dropIfExists('client_notes');
    }
}
