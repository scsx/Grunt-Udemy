var jsFiles = ['js/draw.js', 'js/defaults.js', 'js/interface.js'];
// newer: - see grunt-newer

module.exports = function (grunt) {
    // load-grunt-tasks, to avoid writing all the grunt.loadNpmTasks
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // grunt-concurrent
        concurrent: {
            target: {
                tasks: ['watch:autoprefixer', 'watch:jscompressor', 'cssmin'], // cssmin:target was assumed, as no label was specified
                options: {
                    logConcurrentOutput: true
                }
            }
        },
        // AUTOPREFIXER
        autoprefixer: {
            options: {
                browsers: ['> 1% in PT', 'last 2 versions', 'firefox > 3']
            },
            // dist is just a var, any name will do
            dist: {
                src: 'css/app.css',
                dest: 'css/app-prefixed.css'
            }
        },
        // WATCH
        watch: {
            // we can have more labels
            autoprefixer: {
                files: ['css/app.css'],
                tasks: ['autoprefixer', 'newer:cssmin']
            },
            jscompressor: {
                files: ['js/*.js'],
                tasks: ['uglify']
            }
        },
        // MINIFY
        cssmin: {
            target: {
                files: {
                    'css/app.min.css': ['css/app-prefixed.css']
                }
            }
        },
        // UGLIFY JS
        uglify: {
            my_target: {
                files: {
                    'js/min/bauhaus.min.js': jsFiles
                }
            }
        },
        // IMAGES
        imagemin: {
            dynamic: {
                optimizationLvel: 5,
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif,svg}'], // from |3ose project
                    //src: ['**/*.{png,jpg,gif,svg}', '!build/**/*.{png,jpg,gif,svg}'], // example for "ignore" folder build and contents
                    dest: 'img/compressed'
                }]
            }
        },
        // JSHINT https://jshint.com/docs/options/
        // not used, too many errors
        jshint: {
            options: {
                "bitwise": true,
                "camelcase": true,
                "curly": true,      
                "latedef": true,
                "newcap": true,         
                "nonew": true,   
                "undef": true,
                "unused": true,          
                "esnext": true,
                "sub": true,
                "browser": true,
                "node": true,
                "jquery": true,
                "devel": true,          
                "strict": true      
            },
            target: {
                src: ['js/*.js', 'js/min/bauhaus.min.js']
            }
        }

    });

    /* no need for this, using load-grunt-tasks 
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    */

    grunt.registerTask('default', ['autoprefixer', 'watch']);
    // grunt.registerTask('myOwnTask', 'Do something', ['grunt-autoprefixer']);


    grunt.registerTask('minifyNewImages', ['newer:imagemin']); // cannot have space after newer:
};