module.exports = function (grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');

  var config = {
    javascripts: ['*.js']
  };

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: config.javascripts
    },

    jscs: {
      all: config.javascripts
    }
  });

  grunt.registerTask('jscheck', ['jshint', 'jscs']);
  grunt.registerTask('fulltest', ['jscheck']);
};
