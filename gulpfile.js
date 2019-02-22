const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('default', () => {
    gulp.src('public/images-unminified/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/images'))
});