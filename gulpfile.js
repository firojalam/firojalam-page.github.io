var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var cp = require('child_process');
var jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var browserSync = require('browser-sync').create();

var paths = {
  styles: {
    src: '_sass/**/main.scss',
    dest: '_site/css',
    destsecond: 'css'
  },
//   scripts: {
//     src: '_js/src/*.js',
//     dest: '_site/js/dist/',
//     destsecond: 'js/dist/'
//   }
};

function jekyllBuild() {
  return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
}

function style() {
  return gulp.src(paths.styles.src)
    .pipe(sass({
      includePaths: ['scss'],
      outputStyle: 'expanded',
      onError: browserSync.notify
    }))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest(paths.styles.destsecond));
}

// function js() {
//   return gulp.src([
//     './node_modules/jquery/dist/jquery.min.js',
//     './node_modules/popper.js/dist/umd/popper.min.js',
//     './node_modules/bootstrap/dist/js/bootstrap.min.js',
//     './node_modules/jquery-match-height/dist/jquery.matchHeight-min.js',
//     paths.scripts.src
//   ])
//   .pipe(concatjs('app.bundle.js'))
//   .pipe(gulp.dest(paths.scripts.dest))
//   .pipe(browserSync.reload({stream:true}))
// }

function browserSyncServe(done) {
  browserSync.init({
    server: {
      baseDir: "_site"
    }
  })
  done();
}

function browserSyncReload(done) {
  browserSync.reload();
  done();
}

function watch() {
  gulp.watch(paths.styles.src, style)
  //gulp.watch(paths.scripts.src, js)
  gulp.watch(
    [
    '_layouts/*',
    '_pages/*',
    '_posts/*',
    '_data/*',
    '_includes/*',
    'admin/*',
    '_research/*',
    '_resources/*',
    '_sass/*',
    'assets/*',
    'assets/*/**'
  ],
  gulp.series(jekyllBuild, browserSyncReload));
}

gulp.task('default', gulp.parallel(jekyllBuild, browserSyncServe, watch))