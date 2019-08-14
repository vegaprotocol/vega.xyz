const gulp = require('gulp');
const rename = require('gulp-rename');
const sass  = require('gulp-sass');
const autoprefixer  = require('gulp-autoprefixer');

function styles() {
  return gulp.src('scss/style.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    })
      .on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./css/'));
};

function watchFiles(){
  gulp.watch(['scss/**/*.scss'], styles);
}

const build = gulp.series(styles);
const watch = gulp.series(watchFiles);

exports.build = build;
exports.watch = watch;
exports.default = build;