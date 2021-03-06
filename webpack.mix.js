const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.autoload({
    jquery: ['$', 'jQuery', 'window.jQuery'],
    tether: ['Tether', 'window.Tether']
});
mix.js('resources/assets/js/app.js', 'public/js')
    .js('resources/assets/js/libs/sweetalert-dev.js','public/js/libs.js')
    .js('resources/assets/js/libs/bootstrap-switch.min.js', 'public/js/libs')
    .js('resources/assets/js/libs/main.js', 'public/js/libs')
    .js('resources/assets/js/libs/highlight.js', 'public/js/libs')
    .js('resources/assets/js/libs/mdb.min.js', 'public/js/libs')
    .js('resources/assets/js/libs/tether.min.js', 'public/js/libs')
    .js('resources/assets/js/libs/bootstrap.min.js','public/js/libs')
    .js('resources/assets/js/libs/jquery-3.1.1.min.js', 'public/js/libs')
   .sass('resources/assets/sass/app.scss', 'public/css')
    .styles('resources/assets/css/libs/sweetalert.css', 'public/css/libs.css')
    .styles('resources/assets/css/libs/bootstrap-switch.css', 'public/css/libs/bootstrap-switch.css')
    .styles('resources/assets/css/libs/mdb.min.css', 'public/css/libs/mdb.min.css')
    .styles('resources/assets/css/libs/main.css', 'public/css/libs/main.css')
    .styles('resources/assets/css/libs/highlight.css', 'public/css/libs/main.css')
    .styles('resources/assets/css/libs/bootstrap.css', 'public/css/libs/bootstrap.css')
    .version();
