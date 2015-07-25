/*global module, process*/
module.exports = function (grunt) {
    'use strict';
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        project: {
            app: [],
            assets: ['assets'],
            release: ['release'],
            bowerDirectory: ['bower_components'],
            styleDirectory: ['css'],
            jsDirectory: ['src'],
            CSSFilename: ['style.min.css'],
            BowerJSFilename: ['bower.js'],
            css: ['<%= project.assets %>/sass/style.scss'],
            inputCSS: ['<%= project.assets %>/<%= project.styleDirectory %>/<%= project.CSSFilename %>'],
            outputCSS: ['<%= project.release %>/<%= project.assets %>/<%= project.styleDirectory %>/<%= project.CSSFilename %>']
        },
        env: {
            dev: {
                DESTINATION: 'index.html',
                SOURCE: 'index.tpl.html'
            },
            release: {
                DESTINATION: 'release/index.html',
                SOURCE: 'index.release.tpl.html'
            }
        },
        bower_concat: {
            release: {
                dest: '<%= project.release %>/<%= project.bowerDirectory %>/<%= project.BowerJSFilename %>',
                exclude: [
                    'bootstrap-sass-official'
                ]
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: ['src/**/*.js', 'release/bower_components/bower.js'],
                dest: '<%= project.release %>/<%= project.jsDirectory %>/<%= pkg.name %>.min.js'
            }
        },
        copy: {
            html: {
                expand: true,
                cwd: 'templates/',
                src: '**/*.html',
                dest: 'release/templates/'
            },
            angular: {
                expand: true,
                cwd: 'bower_components/angular',
                src: '*.min.js',
                dest: 'release/bower_components/angular'
            },
            jquery: {
                expand: true,
                cwd: 'bower_components/jquery/dist',
                src: '*.min.js',
                dest: 'release/bower_components/jquery'
            },
            loadingBarCSS: {
                expand: true,
                cwd: 'bower_components/angular-loading-bar/build',
                src: '*.css',
                dest: 'release/bower_components/angular-loading-bar/build/'
            },
            fullCalendarCSS: {
                expand: true,
                cwd: 'bower_components/fullcalendar/dist',
                src: '*.css',
                dest: 'release/bower_components/fullcalendar/dist'
            },
            bootstrapFonts: {
                expand: true,
                cwd: 'assets/fonts/',
                src: '**/*',
                dest: 'release/assets/fonts/'
            },
            customFonts: {
                expand: true,
                cwd: 'fonts/',
                src: '**/*.TTF',
                dest: 'release/fonts/'
            },
            images: {
                expand: true,
                cwd: 'images/',
                src: '**/*',
                dest: 'release/images'
            }
        },
        includeSource: {
            options: {
                templates: {
                    html: {
                        js: '<script src="{filePath}"></script>',
                        css: '<link rel="stylesheet" type="text/css" href="{filePath}" />'
                    },
                    scss: {
                        scss: '@import "{filePath}";',
                        css: '@import "{filePath}";'
                    }
                }
            },
            myTarget: {
                files: {
                    '<%= DESTINATION %>': '<%= SOURCE %>'
                }
            }
        },
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
            sass: {
                files: '<%= project.assets %>/sass/{,*/}*.{scss,sass}',
                tasks: ['sass:dev'],
                options: {
                    livereload: true
                }
            },
            scripts: {
                files: 'src/**/*.js',
                tasks: ['include'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: ['templates/**/*.html'],
                options: {
                    livereload: true
                }
            }
        },
        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    compass: false
                },
                files: {
                    '<%= project.assets %>/css/style.css': '<%= project.css %>'
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'assets/css',
                    src: ['*.css'],
                    dest: 'release/assets/css/',
                    ext: '.min.css'
                }]
            }
        },
        jscs: {
            src: "src/**/*.js",
            options: {
                config: true,
                requireCurlyBraces: ["if"]
            }
        },
        connect: {
            all: {
                options: {
                    port: 9000,
                    hostname: "0.0.0.0"
                }
            }
        },
        open: {
            all: {
                // Gets the port from the connect configuration
                path: 'http://localhost:<%= connect.all.options.port%>',
                app: 'Google Chrome'
            }
        },
        wiredep: {

            dev: {
                // Point to the files that should be updated when
                // you run `grunt wiredep`
                src: [
                    'index.tpl.html'
                ],
                exclude: [
                    'bower_components/bootstrap-sass-official/assets/javascripts'
                ],
                options: {
                    // See wiredep's configuration documentation for the options
                    // you may pass:
                    devDependencies: true
                    // https://github.com/taptapship/wiredep#configuration
                }
            },
            release: {
                // Point to the files that should be updated when
                // you run `grunt wiredep`
                src: [
                    'index.release.tpl.html'
                ],
                exclude: [
                    'bower_components/bootstrap-sass-official'
                ],
                options: {
                    // See wiredep's configuration documentation for the options
                    // you may pass:
                    devDependencies: false
                    // https://github.com/taptapship/wiredep#configuration
                }
            }
        },
        karma: {
            unit: {
                configFile: 'conf.js',
                autoWatch: true
            }
        }
    });
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //Load the plugin that provides the "include-source" task
    grunt.loadNpmTasks('grunt-include-source');
    //Load the plugin that provides the "watch" task
    grunt.loadNpmTasks('grunt-contrib-watch');
    //Load the plugin that provides the "sass" task
    grunt.loadNpmTasks('grunt-contrib-sass');
    //Load the plugin that provides the "jscs" task
    grunt.loadNpmTasks("grunt-jscs");
    //Load the plugin that provides the "connect" task
    grunt.loadNpmTasks('grunt-contrib-connect');
    //Load the plugin that provides the "open" task
    grunt.loadNpmTasks('grunt-open');
    //Load the plugin that provides the "processhtml" task
    grunt.loadNpmTasks('grunt-processhtml');
    //Load the plugin that provides the "wiredep" task
    grunt.loadNpmTasks('grunt-wiredep');
    //Load the plugin that provides the "karma" task
    grunt.loadNpmTasks('grunt-karma');
    //Load the plugin that provides the "cssmin" task
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    //Load the plugin that provides the "copy" task
    grunt.loadNpmTasks('grunt-contrib-copy');
    //Load the plugin that provides the "bower concat" task
    grunt.loadNpmTasks('grunt-bower-concat');
    //Load the plugin that provides the "env" task
    grunt.loadNpmTasks('grunt-env');
    // Include task(s).
    grunt.registerTask('include', ['env:dev', 'loadconst', 'includeSource']);
    grunt.registerTask('watchTask', ['watch']);
    grunt.registerTask('generateCSS', ['sass:dev']);
    grunt.registerTask('validateJS', ['jscs']);
    grunt.registerTask('launchServer', ['open', 'connect']);
    grunt.registerTask('openBrowser', ['open']);
    grunt.registerTask('wire', ['wiredep:dev']);
    grunt.registerTask('test', ['karma']);
    grunt.registerTask('releaseCSS', ['sass:dev', 'copy:loadingBarCSS', 'copy:fullCalendarCSS', 'cssmin']);
    grunt.registerTask('releaseJS', ['copy:angular', 'copy:jquery', 'bower_concat', 'uglify']);
    grunt.registerTask('releaseFonts', ['copy:customFonts', 'copy:bootstrapFonts']);
    grunt.registerTask('releaseImages', ['copy:images']);
    grunt.registerTask('releaseHTML', ['copy:html', 'env:release', 'loadconst', 'includeSource']);
    grunt.registerTask('loadconst', 'Load constants', function () {
        grunt.config('SOURCE', process.env.SOURCE);
        grunt.config('DESTINATION', process.env.DESTINATION);
    });
    grunt.registerTask('develop', ['jscs', 'env:dev', 'loadconst', 'includeSource', 'wiredep:dev', 'sass:dev', 'launchServer', 'watch']);
    grunt.registerTask('release', ['releaseCSS', 'releaseJS', 'releaseFonts', 'releaseImages', 'releaseHTML']);
};
