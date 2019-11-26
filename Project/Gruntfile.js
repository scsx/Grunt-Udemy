module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        // autoprefixer
        autoprefixer: {
            options: {
                browsers: [
                    "> 1% in PT",
                    "last 2 versions",
                    "firefox > 3",
                    "ie9"
                ]
            },
            // dist is just a var, any name
            dist: {
                src: "css/app.css",
                dest: "css/app-prefixed.css"
            }
        }
    });

    grunt.loadNpmTasks("grunt-autoprefixer");

    grunt.registerTask("default", ["grunt-autoprefixer"]);
    // grunt.registerTask("myOwnTask", "Do something", ["grunt-autoprefixer"]);
};
