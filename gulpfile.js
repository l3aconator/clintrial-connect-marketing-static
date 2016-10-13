'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./css-compiled'))
    .pipe(browserSync.stream());
});
 
gulp.task('sass:watch', function () {
  
  browserSync.init({
        proxy: "http://clintrialconnect-marketing.dev:8888/"
    });
  
  gulp.watch('./scss/**/*.scss', ['sass']);
});