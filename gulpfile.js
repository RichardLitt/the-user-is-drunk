import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';
import imagemin from 'gulp-imagemin';

function minifyCSS() {
    return gulp.src('stylesheets/*.css')
               .pipe(cleanCSS())
               .pipe(gulp.dest('assets/stylesheets'));
}

function imageMin() {
    return gulp.src('assets/images/*')
               .pipe(imagemin())
               .pipe(gulp.dest('assets/images'));
}

function watchFiles() {
    gulp.watch('stylesheets/*.css', minifyCSS);
}

export default gulp.series(minifyCSS, imageMin);
export {
    minifyCSS,
    imageMin,
    watchFiles as watch,
};
