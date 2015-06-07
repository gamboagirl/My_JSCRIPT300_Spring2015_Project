module.exports = function (grunt) {     // assign grunt to module exports
    grunt.initConfig({      // passes the configuration object
        jshint: {
            all: ['Gruntfile.js', 'app/**/*.js', '!**/libs/*.js','test/**/*.js'],
            options: {
                browser: true,  // use a browser
                curly: true,    // use proper curly braces
                eqeqeq: true,   // must use triple equals
                globals: {
                    afterEach: true,
                    after: true,
                    before: true,
                    beforeEach: true,
                    describe: true,
                    it: true,
                    expect: true,
                    console: true
                }
            }
        },
        
        mocha: {
            all: {  // target
                src: ['test/**/*.html'],
                options: {
                    mocha: {
                        ignoreLeaks: false   // note: globals are reported as leaks
                    },
                    run: true
                }
            }
        },
        
        watch: {
            //reference the files defined in jshint taks
            files: "<%= jshint.files %>",
            tasks: ["jshint"]
            //tasks: ["jshint", "mocha"]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-watch');
    grunt.registerTask('default', ['jshint']);
    //grunt.registerTask('default', ['jshint', 'mocha']);

};