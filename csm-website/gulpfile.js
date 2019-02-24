var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var imagemin = require('gulp-imagemin');
var cssmin = require('gulp-cssmin');

gulp.task('browser-sync', function () {
    browserSync.init(['./dist/*.html','./sass/*.scss'], {
        server: {
            baseDir: './dist'
        }
    });
});

gulp.task('sass',  function () {
    gulp.src('./sass/*.scss')
    .pipe(sass({includePaths: ['scss']}))
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('minify-images', function () {
    gulp.src('./images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/resized-images'));
});




gulp.task('default', [ 'sass', 'minify-images', 'browser-sync'], function () {
    gulp.watch("sass/*.scss", ['sass']);
});