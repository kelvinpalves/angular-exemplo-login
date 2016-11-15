//Automatizador de tarefas.
var gulp = require('gulp');
//Ferramenta para analisar o código fonte.
var jshint = require('gulp-jshint');

gulp.task('analisar', function () {
	console.log('Analisando o código fonte com JSHint.');
	gulp.src('./src/app/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('default', function() {
	gulp.run('analisar');
	gulp.watch('./src/app/**/*.js', function (evt) {
		gulp.run('analisar');
		console.log("Arquivo alterado");
	});
});