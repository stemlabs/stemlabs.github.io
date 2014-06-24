module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		csslint: {
			lax: {
				src: ['css/main.css']
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-csslint');
	
	grunt.registerTask('lint', ['csslint']);
	grunt.registerTask('default', ['lint']);
};
