var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
// var useref = require('gulp-useref');
// var gulpIf = require('gulp-if');
// var cache = require('gulp-cache');
// var gutil = require('gulp-util');
// var inject = require('gulp-inject');
// var htmlclean = require('gulp-htmlclean');
// var cleanCSS = require('gulp-clean-css');
// var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
// var del = require('del');



var paths = {
  src: 'app/**/*',
  srcHTML: 'app/**/*.html',
  srcCSS: 'app/**/*.css',
  srcJS: 'app/**/*.js',
  srcImage: 'app/**/*.*',
  tmp: 'tmp',
  tmpIndex: 'tmp/index.html',
  tmpCSS: 'tmp/**/*.css',
  tmpJS: 'tmp/**/*.js',
  tmpImage: 'app/**/*.*',
  dist: 'public',
  distIndex: 'public/index.html',
  distCSS: 'public/**/*.css',
  distJS: 'public/**/*.js',
  distImage: 'app/**/*.*'

};
gulp.task('serve', function() {
  browserSync.init({
  server: {
baseDir:'app/'
}
});
gulp.watch("app/*.*").on('change', reload);
gulp.watch("app/./*.*").on('change',reload);

});

// gulp.task('html', function () {
//   return gulp.src(paths.srcHTML).pipe(gulp.dest(paths.tmp));
// });
// gulp.task('css', function () {
//   return gulp.src(paths.srcCSS).pipe(gulp.dest(paths.tmp));
// });
// gulp.task('js', function () {
//   return gulp.src(paths.srcJS).pipe(gulp.dest(paths.tmp));
// });
// gulp.task('image', function () {
//   return gulp.src(paths.srcImage).pipe(gulp.dest(paths.tmp));
// });


// gulp.task('inject', ['copy'], function () {
//   var css = gulp.src(paths.tmpCSS);
//   var js = gulp.src(paths.tmpJS);
//   var image = gulp.src(paths.tmpImage);

//   return gulp.src(paths.tmpIndex)
//     .pipe(inject( css, { relative:true } ))
//     .pipe(inject( js, { relative:true } ))
//     .pipe(inject( image, { relative:true } ))
//     .pipe(gulp.dest(paths.tmp));
// });


// gulp.task('html:dist', function () {
//   return gulp.src(paths.srcHTML)
//     .pipe(htmlclean())
//     .pipe(gulp.dest(paths.dist));
// });
// gulp.task('css:dist', function () {
//   return gulp.src(paths.srcCSS)
//     .pipe(concat('full_style.min.css'))
//     .pipe(cleanCSS())
//     .pipe(gulp.dest(paths.dist));
// });
// gulp.task('js:dist', function () {
//   return gulp.src(paths.srcJS)
//     .pipe(concat('angular.min.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest(paths.dist));
// });

// gulp.task('copy:dist', ['html:dist', 'css:dist', 'js:dist']);
// gulp.task('inject:dist', ['copy:dist'], function () {
//   var css = gulp.src(paths.distCSS);
//   var js = gulp.src(paths.distJS);
//   return gulp.src(paths.distIndex)
//     .pipe(inject( css, { relative:true } ))
//     .pipe(inject( js, { relative:true } ))
//     .pipe(gulp.dest(paths.dist));
// });
// gulp.task('build', ['inject:dist']);

// gulp.task('clean', function () {
//   del([paths.tmp]);
// });


gulp.task('default',['serve'],function(){
console.log("done");
});
// gulp.task('copy', ['html', 'css', 'js','image'],function(){
//   console.log("copydone");
// });