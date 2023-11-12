import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';
import imagemin from 'gulp-imagemin';

function minifyCSS() {
    return gulp.src('assets/stylesheets/*.css')
               .pipe(cleanCSS())
               .pipe(gulp.dest('stylesheets'));
}

function imageMin() {
    return gulp.src('assets/images/*')
               .pipe(imagemin())
               .pipe(gulp.dest('images'));
}

function watchFiles() {
    gulp.watch('assets/stylesheets/*.css', minifyCSS);
}

export default gulp.series(minifyCSS, imageMin);
export {
    minifyCSS,
    imageMin,
    watchFiles as watch,
};
