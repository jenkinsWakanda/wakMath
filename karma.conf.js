module.exports = function(config) {    
    config.set({
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: [
            'dots',
            'junit',
            'coverage',
            'html'
        ],      
        // frameworks to use
        frameworks: [
            'mocha',
            'chai',
            'sinon',
            'sinon-chai'
        ],
      	// source files, that you wanna generate coverage for
        preprocessors: {
          'wakMath.js': ['coverage']
        },
        // list of files / patterns to load in the browser
        files: [
          'wakMath.js',
          'tests/*.js'
        ],
        // list of files to exclude
        exclude: [],
        // reporters configuration
        junitReporter: {
            outputFile: 'reports/result/test-results.xml',
            suite: ''
        },
        jshintPreprocessor: {
          jshintrc: '.jshintrc'
        },
        coverageReporter: {
            reporters:[
                {
                    type: 'html', 
                    subdir: '.',
                    dir:'reports/coverage/html/'
                },
                {
                    type: 'cobertura',
                    subdir: '.',
                    dir: 'reports/coverage/'
                }
            ],
            watermarks: {
                statements: [ 50, 75 ],
                functions: [ 50, 75 ],
                branches: [ 50, 75 ],
                lines: [ 50, 75 ]
            }
        },
        htmlReporter: {
            outputDir: 'reports/html/',
            namedFiles: true
        },
        // web server port
        port: 9876,
        // enable / disable colors in the output (reporters and logs)
        colors: true,
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,
        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: [
            'PhantomJS',
            //'Chrome',
        ],
        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,
        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    });
};