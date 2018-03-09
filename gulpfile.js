let gulp = require('gulp')
let cleanCSS = require('gulp-clean-css')
let imagemin = require('gulp-imagemin')

gulp.task('minify-css', () =>
  gulp.src('assets/stylesheets/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('stylesheets'))
)

gulp.task('imagin', () =>
  gulp.src('assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('stylesheets'))
)

gulp.task('default', ['minify-css', 'imagin'])

gulp.task('watch', () =>
  gulp.watch('assets/stylesheets/*.css', ['minify-css'])
)
