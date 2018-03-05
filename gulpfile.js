let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let uglify = require('gulp-uglify');
let rename = require('gulp-rename');
let imagemin = require('gulp-imagemin');

gulp.task('minify-css', () => {
    return gulp.src('assets/stylesheets/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('stylesheets'));
});

gulp.task('uglify', function() {
    return gulp.src('assets/javascripts/**/*.js')
        .pipe(uglify())
        .pipe(rename({extname: ".min.js"}))
        .pipe(gulp.dest('javascripts'));
});

gulp.task('imagin', () =>
gulp.src('assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('stylesheets'))
);

gulp.task('default', ['minify-css', 'uglify', 'imagin']);
