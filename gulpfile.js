/**
 * Created by gege on 2016/7/7.
 */
var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    del = require('del');
gulp.task('minifycss', function() {
    return gulp.src('./*.css')      //压缩的文件
        .pipe(gulp.dest('minified/css'))   //输出文件夹
        .pipe(minifycss());   //执行压缩
});
gulp.task('minifyjs',['clean'], function() {
    return gulp.src('./jForm.values.js')
        .pipe(gulp.dest('minified/js'))    //输出main.js到文件夹
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('minified/js'));  //输出
});
gulp.task('clean', function() {
    del(['minified/css', 'minified/js','minified'])
});
gulp.task('default', ['minifyjs']);