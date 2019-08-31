const mix = require('laravel-mix');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

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

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/rcon.js', 'public/js')
	.sass('resources/sass/app.scss', 'public/css')
	.sourceMaps();

mix.webpackConfig(webpack => {
	return { plugins:
		[
			new MonacoWebpackPlugin({
				languages: ['json', 'yaml'],
				output: 'js/monaco'
			})
		]
	}
});
