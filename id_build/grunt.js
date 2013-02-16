/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: '<json:package.json>',
		meta: {
			banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
					'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
					'<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
					'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
					' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
		},
		lint: {
			files: ['grunt.js', 'lib/**/*.js', 'test/**/*.js']
		},
		qunit: {
			files: ['test/**/*.html']
		},
		concat: {
			dist: {
				src: ['<banner:meta.banner>', '<file_strip_banner:lib/<%= pkg.name %>.js>'],
				dest: 'dist/<%= pkg.name %>.js'
			}
		},
		min: {
			dist: {
				src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
				dest: 'dist/<%= pkg.name %>.min.js'
			}
		},
		watch: {
			files: '<config:lint.files>',
			tasks: 'lint qunit'
		},
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true,
				browser: true
			},
			globals: {

			}
		},
		uglify: {

		},
		less: {
			development: {
				options: {
					paths: ["assets/style"]
				},
				files: {

				}
			},
			production: {
				options: {
					paths: ["assets/style"],
					yuicompress: true
				},
				files: {

				}
			}
		},
		ftp-deploy: {
			build: {
				auth: {
					host: 'server.com',
					port: 21,
					authKey: 'key1'
				},
				src: '/path/to/source/folder',
				dest: '/path/to/destination/folder',
				exclusions: ['/path/to/source/folder/**/.DS_Store', '/path/to/source/folder/**/Thumbs.db', 'dist/tmp']
			}
		}
	});

	// Default task.
	grunt.registerTask('default', 'lint qunit concat min');
};
