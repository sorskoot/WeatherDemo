﻿/// <binding BeforeBuild='default' />

module.exports = function (grunt) {
    grunt.initConfig({
        copy: {
            main: {
                files: [
                     { src: 'node_modules/jquery/dist/jquery.min.js', dest: 'www/scripts/lib/jquery.min.js' },
                     { src: 'node_modules/jquery/dist/jquery.min.js.map', dest: 'www/scripts/lib/jquery.min.js.map' },
                     { src: 'node_modules/jquery/dist/jquery.js', dest: 'www/scripts/lib/jquery.js' },
                     { src: 'node_modules/jquery-mobile/dist/jquery.mobile.js', dest: 'www/scripts/lib/jquery.mobile.js' },
                     { expand: true, cwd: 'node_modules/jquery-mobile/dist/', src: ['*.css', 'images/**/*'], dest: 'www/css/' },
                ]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-copy");

    grunt.registerTask('default', ['copy']);
};