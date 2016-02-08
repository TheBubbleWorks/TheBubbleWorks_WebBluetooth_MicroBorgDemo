// see: https://github.com/gruntjs/grunt-contrib-connect
module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    hostname: '*',
                    port: 3141,
                    protocol: 'https',
                    //key: grunt.file.read('server.key').toString(),
                    //cert: grunt.file.read('server.crt').toString(),
                    //ca: grunt.file.read('ca.crt').toString(),
                    keepalive: true,
                    base: '.'
                },
            },
        },
	});


	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.registerTask('default', 'connect:server');

};
