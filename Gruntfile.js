// see: http://stackoverflow.com/questions/18821087/errors-when-running-ssl-with-grunt-server
// see: http://www.akadia.com/services/ssh_test_certificate.html
module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			options: {
				hostname: 'localhost',
				key: grunt.file.read('server.key').toString(),
				cert: grunt.file.read('server.crt').toString(),
				ca: grunt.file.read('server.crt').toString(),
				passphrase: 'grunt',
			},
			example: {
                protocol: 'https',
				port: 3141,
				base: '.'
			}
		}
	});


	grunt.loadNpmTasks('grunt-connect');
	grunt.registerTask('default', 'connect:example');

};
