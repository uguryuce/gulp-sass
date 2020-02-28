const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss into scc
function style() {
    //1. where is my scss file
    return gulp.src('./scss/**/*.scss')
    //2. pass that file through sass compiler
    .pipe(sass())
    //3. where do I save the compiled CSS?
    .pipe(gulp.dest('./css'))
    //4. stream changes to all browser
    .pipe(browserSync.stream());
}
function watch () {
    browserSync.init({
        notify:false;
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;