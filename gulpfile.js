const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const cssmin = require('gulp-clean-css');

gulp.task('default', () => {
    gulp.src('public/images-unminified/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/images'))
});

gulp.task('cssmin', () => {
    return gulp.src('public/assets/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('client/dist'))
});