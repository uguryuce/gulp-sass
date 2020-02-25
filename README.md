### Gulp & Sass Project

<br>

# Gulp

* packages must be set up ;

> node

> npm

---

* Open the folder created for the project with IDE
* add <b>index.html</b> page
* import css into index.html <b>href = "css/styles.css"</b>

---
* create folder -> <b>scss</b>
---

#### terminal

``` npm install gulp-cli -g ```

``` npm init ```

``` npm install --save-dev gulp gulp-sass browser-sync```

---

* add <b>gulpfile.js</b> page

> <b>gulpfile.js</b>

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

---

* into scss folder add <b>styles.scss</b> page

---

#### terminal - final step

```gulp style```

---

#### for start

``` gulp watch```






 
