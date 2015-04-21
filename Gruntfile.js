module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: ['wakMath.js'],
      options: {
        reporter: require('jshint-jenkins-checkstyle-reporter'),
        reporterOutput: 'reports/jshint/report-jshint-checkstyle.xml'
      }
    }
  });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jslint');
    grunt.registerTask('default', [
        'jshint'
    ]);
};