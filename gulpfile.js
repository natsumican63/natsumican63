var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var plumber = require('gulp-plumber');
var browser = require("browser-sync");

gulp.task('default', ['browser-sync']);

gulp.task('browser-sync', function() {
  browser({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task("sass", function() {
  gulp.src("./assets/scss/**/*.scss")
    .pipe(plumber())
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest("./assets/css"))
    .pipe(browser.reload({stream:true}));
});

gulp.task('watch', function(){
  gulp.watch('./assets/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);

gulp.task('default', ['browser-sync'], function () {
  gulp.watch("./assets/scss/**/*.scss", ['bs-reload']);
});

gulp.task('bs-reload', function () {
  browser.reload();
});

gulp.task('watch',['default'], function () {
  gulp.watch('./assets/scss/**/*.scss', ['sass']);
  gulp.watch('./assets/css/*.css', ['bs-reload']);
});
