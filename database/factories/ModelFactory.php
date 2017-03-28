<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(TrackMyNotes\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});
$factory->define(TrackMyNotes\Client::class, function (Faker\Generator $faker) {
    return [
        'id' => factory(TrackMyNotes\User::class)->create()->id,
        'propertyName'	=> $faker->city . " Hotel",
        'todaysDate' => (string)$faker->date($format = 'Y-m-d', $max = 'now'),
        'firstName' => $faker->firstNameMale,
        'lastName' => $faker->lastName,
        'title' => $faker->jobTitle,
        'contactEmail' => $faker->email,
        'contactPhone' => $faker->phoneNumber,
        'contactExt' => $faker->buildingNumber,
        'groupName' => $faker->company,
        'address1'   => $faker->streetAddress,
        'address2'    => '',
         'city'   => $faker->city,
         'state'   => 'CA',
         'zip'   => (string)'92211',
         'phone'   => (string)$faker->phoneNumber,
         'fax'   => (string)$faker->phoneNumber,
         'tollFree'   => (string)$faker->phoneNumber,
         'email'   => $faker->email,
         'web'   => $faker->company . ".org",
         'numDays'   => (string)$faker->numberBetween(1,12),
         'numCatered'   => (string)$faker->numberBetween(1,12),
         'numNotCatered'   => (string)$faker->numberBetween(1,12),
          'assignment'  => 'David Aiken',
          'numEvents'  => (string)$faker->numberBetween(1,12),
          'lgstSQft'  => (string)$faker->numberBetween(500,4000),
          'lgstName'  => 'Big Room',
          'groupNotes'  => $faker->paragraphs(3,true),
          'groupStatus'  => 'Group decision coming'
    ];
});