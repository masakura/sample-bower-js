module.exports = function (grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  var config = {
    javascripts: ['*.js', 'test/**/*.js']
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
    },

    jasmine: {
      all: {
        src: 'foo.js',
        options: {
          specs: 'test/spec/{,*/}*.js',
          vendor: [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/underscore/underscore.js',
            'bower_components/backbone/backbone.js'
          ]
        }
      }
    }
  });

  grunt.registerTask('test', ['jasmine']);
  grunt.registerTask('jscheck', ['jshint', 'jscs']);
  grunt.registerTask('fulltest', ['jscheck', 'test']);

  grunt.registerTask('default', ['fulltest']);
};
