const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task("sass", () => {
	return gulp.src("./_sass/**/*.scss")
	.pipe(sass().on("error", sass.logError))
	.pipe(gulp.dest("./assets/css/"));
});

gulp.task("watch", () => {
	return gulp.watch("./_sass/**/*.scss", ['sass']);
});
gulp.task("default", ['sass', 'watch']);