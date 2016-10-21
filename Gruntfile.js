module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'lib/styles/main.min.css': 'src/styles/main.scss'
                }
            }
        },

        uglify: {
            options: {
                preserveComments: false
            },
            my_target: {
                files: {
                    'lib/js/app.min.js': ['lib/js/app.js'],
                    'lib/js/vendor.min.js': ['lib/js/vendor.js']
                }
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                files: {
                    'lib/js/app.js': ['src/js/*.js'],
                    'lib/js/vendor.js': ['src/js/vendor/*.js']
                }
            }
        },

        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 3
                },
                files: [
                    {
                        expand: true,
                        cwd: 'images/',
                        src: ['**/*.{png,jpg,gif,svg}'],
                        dest: 'images/'
                    }
                ]
            }
        },

        jshint: {
            all: ['Gruntfile.js', 'src/*.js', 'test/*.js']
        },

        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015']
            },
            dist: {
                files: {
                    'src/js/main.js': 'src/js/main.js'
                }
            }
        },

        haml: {
            dist: {
                files: {
                    'app/views/layouts/index-haml.html': 'app/views/layouts/index.haml',
                    'app/views/layouts/sign-up-haml.html': 'app/views/layouts/sign-up.haml',
                    'app/views/layouts/registration.html': 'app/views/layouts/registration.haml',
                    'app/views/layouts/dev.html': 'app/views/layouts/dev.haml',
                    'app/views/layouts/game.html': 'app/views/layouts/game.haml'
                }
            }
        },

        watch: {
            css: {
                files: ['src/styles/**/*'],
                tasks: ['sass']
            },

            javascript: {
                files: [
                    'src/js/**/*', 'test/*.js'
                ],
                tasks: ['jshint', 'concat', 'uglify']
            },

            img: {
                files: ['images/**/*'],
                tasks: ['imagemin']
            },

            html: {
              files: ['app/views/layouts/*.haml'],
              tasks: ['haml']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-haml2html');
    grunt.registerTask('default', [
        'sass',
        'watch',
        'imagemin',
        'concat',
        'uglify',
        'jshint',
        'babel',
        'haml'
    ]);
};
