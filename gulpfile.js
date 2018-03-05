let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => {
    return gulp.src('assets/stylesheets/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('stylesheets'));
});

gulp.task('default', ['minify-css']);