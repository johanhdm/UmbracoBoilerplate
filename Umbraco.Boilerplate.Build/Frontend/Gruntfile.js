module.exports = function(grunt) {
	var autoprefixer = require('autoprefixer-core');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			sass: {
			    files: ['../../Umbraco.Boilerplate.Web/Static/Styles/css/**/*.{scss,sass}'],
				tasks: ['css']
			},
			livereload: {
				files: ['*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
				options: {
					livereload: true
				}
			}
		},
		sass: {
			options: {
				sourceMap: true,
				outputStyle: 'nested'
			},
			dist: {

				files: {
				    '../../Umbraco.Boilerplate.Web/Static/Styles/dist/styles-noprefix.css': '../../Umbraco.Boilerplate.Web/Static/Styles/css/app.scss'
				}
			}
		},
		autoprefixer: {
			options: {
				// Task-specific options go here.
			},

			// prefix the specified file
			single_file: {
				options: {
					browsers: ['last 2 versions', 'ie 8', 'ie 9']
				},
				src: '../../Umbraco.Boilerplate.Web/Static/Styles/dist/styles-noprefix.css',
				dest: '../../Umbraco.Boilerplate.Web/Static/Styles/dist/styles.css'
			}
		}
	});

	grunt.registerTask('css', ['sass:dist', 'autoprefixer']);
	grunt.registerTask('default', ['css', 'watch']);

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
};