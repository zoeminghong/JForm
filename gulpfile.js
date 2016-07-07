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
    return gulp.src('./*.css')      //ѹ�����ļ�
        .pipe(gulp.dest('minified/css'))   //����ļ���
        .pipe(minifycss());   //ִ��ѹ��
});
gulp.task('minifyjs', function() {
    return gulp.src('src/*.js')
        .pipe(concat('jForm.values.js'))    //�ϲ�����js��main.js
        .pipe(gulp.dest('minified/js'))    //���main.js���ļ���
        .pipe(rename({suffix: '.min'}))   //renameѹ������ļ���
        .pipe(uglify())    //ѹ��
        .pipe(gulp.dest('minified/js'));  //���
});
gulp.task('clean', function(cb) {
    del(['minified/css', 'minified/js'], cb)
});
gulp.task('default', ['minifyjs'], function() {
    gulp.start('minifycss', 'minifyjs');
});