var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');

var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');

gulp.task('browser-sync', ['nodemon'], function() {
    browserSync.init(null, {
        proxy: "http://localhost:3700", // port of node server
    });
});

gulp.task('default', ['browser-sync'], function () {
    gulp.watch(["./src/*.html"], reload);
});

gulp.task('nodemon', function (cb) {
    var callbackCalled = false;
    return nodemon({script: './server.js'}).on('start', function () {
        if (!callbackCalled) {
            callbackCalled = true;
            cb();
        }
    });
});

var config = {
  source: './src/',
  dist: './public/'
};
var paths = {
  assets: "/assets/",
  html: "**/*.html",
  js: "js/**/*.js",
  components: "js/componentes/**.js",
  vendor: "js/vendor/**.js",
  models: "js/models/**.js",
  sass: "scss/**/main.scss",
  mainSass: "scss/main.scss",
  mainJS: "js/app.js",
  imgPng: "img/**/**",
  jquery: "js/vendor/jquery-3.2.1.min.js"

};
var sources = {
  assets: config.source + paths.assets,
  html: config.source + paths.html,
  sass: paths.assets + paths.sass,
  js: config.source+paths.assets+ paths.js,
  jquery: config.source+paths.assets+ paths.jquery,
  vendor: config.source+paths.assets+ paths.vendor,
  components: config.source + paths.assets + paths.components,
  models: config.source+paths.assets+ paths.models,
  rootSass: config.source + paths.assets + paths.mainSass,
  rootJS: config.source + paths.assets + paths.mainJS,
  img: config.source + paths.assets + paths.imgPng,
};
gulp.task('html', ()=>{
  gulp.src(sources.html).pipe(gulp.dest(config.dist));
});
gulp.task('img', ()=>{
  gulp.src(sources.img).pipe(gulp.dest(config.dist + paths.assets + "img"));
});
gulp.task('sass', ()=>{
  console.log(sources.rootSass);
  gulp.src(sources.rootSass)
  .pipe(sass({
    outputStyle: "compressed"
  }).on("Error", sass.logError))
  .pipe(gulp.dest(config.dist + paths.assets + "css"));
});

gulp.task('js', ()=>{
  console.log(sources.jquery);
  gulp.src([sources.jquery,sources.vendor,sources.models,sources.components,sources.rootJS])
  .pipe(concat("new.js"))//temporal no es necsario en un existente
  .pipe(browserify())
  .pipe(rename("app.js"))
  .pipe(gulp.dest(config.dist + paths.assets + "js"));
});
gulp.task("sass-watch", ["sass"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("js-watch", ["js"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("html-watch", ["html"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("img-watch", ["img"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("serve", () => {
  browserSync.init({
    server: {
      baseDir: config.dist
    }
  });
  gulp.watch(sources.html, ["html-watch"]);
  gulp.watch(sources.sass, ["sass-watch"]);
  gulp.watch(sources.js, ["js-watch"]);
  gulp.watch(sources.img, ["img-watch"]);

});
