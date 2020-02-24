# Gulp & Sass Project

# Gulp

* kurulu olması gereken paketler ;

> node

> npm

---

*  IDE üzerinden proje için oluşturulan klasörü aç
* <b>index.html</b> sayfası ekle
* index.html içine css import et <b>href = "css/styles.css"</b>

---
* klasör oluştur -> <b>scss</b>
---

#### terminal

``` npm install gulp-cli -g ```

``` npm init ```

``` npm install --save-dev gulp gulp-sass browser-sync```

---

* <b>gulpfile.js</b> sayfası ekle

```js
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
```

* scss dizini içine <b>styles.scss</b> sayfası ekle

#### terminal - son adım

```gulp style```

#### başlatmak için

``` gulp watch```






 
