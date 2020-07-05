// Gulpfile.js running on stratumui, 
// a css framework available on npmjs.com
var gulp 	       = require('gulp'),
    sass 	       = require('gulp-sass'),
    minify       = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    cssbeautify = require('gulp-cssbeautify');
    browserSync  = require('browser-sync').create(),
  	concat       = require('gulp-concat'),
  	uglify 	     = require('gulp-uglify'),
    rename 	     = require('gulp-rename'),
    cache        = require('gulp-cache'),
    notify       = require('gulp-notify');

var paths = {
  styles: {
    src: './source/scss/**/*.scss',
    dest: './dist/assets/css'
  },
  scripts: {
    src: './source/js/*.js',
    dest: './dist/assets/js'
  },
  bundle: {
    src: './source/js/plugins/*.js',
    dest: './dist/assets/js'
  }
};

// Static Server + watching scss/html files
function styles() {
  return gulp
  	.src(paths.styles.src, {
      sourcemaps: true
    })
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(cssbeautify())
    .pipe(gulp.dest("./dist/assets/css"))
    .pipe(minify())
    .pipe(concat('./dist/assets/css/style.css'))
    .pipe(rename({
        basename: 'style',
        extname: '.min.css'
    }))
    .pipe(gulp.dest("./"))
    .pipe(browserSync.stream())
    .pipe(notify({ message: 'Styles task complete' }));
}

// Static Server + watching script/html files
function scripts() {
  return gulp
  	.src(paths.scripts.src, {
      sourcemaps: true
    })
    .pipe(concat('./scripts.js"'))
    .pipe(rename({
        basename: 'scripts',
        extname: '.min.js'
    }))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/assets/js"))
    .pipe(browserSync.stream())
    .pipe(notify({ message: 'Scripts task complete' }));
}

// Static bundle scripts files
function bundle() {
  return gulp
  	.src(paths.bundle.src, {
      sourcemaps: true
    })
    .pipe(concat('./*.js"'))
    .pipe(rename({
        basename: 'main',
        extname: '.min.js'
    }))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/assets/js"))
    .pipe(browserSync.stream())
    .pipe(notify({ message: 'Bundle js scripts task complete' }));
}

function watch() {
    browserSync.init({
        server: "./dist/"
    });

  gulp
      .watch(paths.styles.src, styles);
  gulp
      .watch(paths.scripts.src, scripts);
  gulp
      .watch(paths.bundle.src, bundle);
  gulp
     .watch("./dist/*.html").on('change', browserSync.reload);
}

var build = gulp.parallel(styles, scripts, bundle, watch);

gulp
  .task(build);
gulp
  .task('dev', build);