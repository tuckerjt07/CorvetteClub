/*global module */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        project: {
            app: [],
            assets: ['assets'],
            css: ['<%= project.assets %>/sass/style.scss']
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        includeSource: {
            options: {
                templates: {
                    html: {
                        js: '<script src="{filePath}"></script>',
                        css: '<link rel="stylesheet" type="text/css" href="{filePath}" />',
                    },
                    scss: {
                        scss: '@import "{filePath}";',
                        css: '@import "{filePath}";',
                    }
                }
            },
            myTarget: {
                files: {
                    'index.html': 'index.tpl.html'
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
                files: '**/*.html',
                tasks: ['include'],
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
                    '<%= project.assets %>/css/style.css':'<%= project.css %>'
                }
            }
        },
        jscs: {
            src: "src/**/*.js",
            options: {
                config: true,
                requireCurlyBraces: [ "if" ]
            }
        },
        connect: {
            all: {
                options:{
                    port: 9000,
                    hostname: "0.0.0.0",
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

            task: {

                // Point to the files that should be updated when
                // you run `grunt wiredep`
                src: [
                    'index.tpl.html'
                ],
                exclude: [
                    'bower_components/bootstrap-sass-official/assets/javascripts',
                    'bower_components/jquery'
                ],
                options: {
                    // See wiredep's configuration documentation for the options
                    // you may pass:
                    devDependencies: true
                    // https://github.com/taptapship/wiredep#configuration
                }
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
    // Include task(s).
    grunt.registerTask('include', ['includeSource']);
    grunt.registerTask('watchTask', ['watch']);
    grunt.registerTask('generateCSS', ['sass:dev']);
    grunt.registerTask('validateJS', ['jscs']);
    grunt.registerTask('launchServer', ['open', 'connect']);
    grunt.registerTask('openBrowser', ['open']);
    grunt.registerTask('wire', ['wiredep']);
    grunt.registerTask('develop', ['jscs', 'includeSource', 'wiredep', 'sass:dev', 'launchServer', 'watch']);
    grunt.registerTask('production', ['uglify', 'includeSource', 'wiredep', 'sass', 'launchServer', 'watch']);
};
