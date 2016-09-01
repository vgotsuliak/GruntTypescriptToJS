'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        typescript: {
            options: {
                module: 'commonjs'
            },
            all: {
                src: ['./app/ts/*.ts'],
                dest: './app/js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-typescript');

    grunt.registerTask('default', ['typescript']);

};