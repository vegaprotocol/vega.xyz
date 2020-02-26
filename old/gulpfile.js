const gulp = require('gulp');
const rename = require('gulp-rename');
const sass  = require('gulp-sass');
const autoprefixer  = require('gulp-autoprefixer');
const browsersync = require("browser-sync").create();

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
  gulp.watch(['scss/**/*.scss', '**/*.html'], gulp.series(styles, browserSyncReload));
}

function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./"
    },
    port: 3000
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

const build = gulp.series(styles);
const watch = gulp.parallel(watchFiles, browserSync);

exports.build = build;
exports.watch = watch;
exports.default = build;