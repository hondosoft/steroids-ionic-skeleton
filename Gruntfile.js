'use strict';

module.exports = function (grunt) {

    grunt.loadNpmTasks("grunt-steroids");

    grunt.registerTask("default", ["steroids-make", "steroids-compile-sass"]);

};
