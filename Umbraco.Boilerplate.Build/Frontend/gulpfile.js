var gulp = require('gulp')
    , sass = require('gulp-sass')
    , prefix = require('gulp-autoprefixer')
    , minify = require('gulp-minify-css')
    , rename = require('gulp-rename')
    , concat = require('gulp-concat')
    , uglify = require('gulp-uglify');


var base = "../../Umbraco.Boilerplate.Web/Static/";

//Paths configuration
var paths = {
    "src": {
        "sass": [base + "Styles/css/**/*.scss", base + "Styles/css/**/*.sass"],
        "css": base + "Styles/app.css",
        //if the order of the scripts is important, specify them here
        "js": [base + "Scripts/js/Libraries/jquery.js", base + "Scripts/js/Libraries/bootstrap.js", base + "Scripts/js/App/**/*.js"]
    },
    "dest" : {
        "css" : base + "Styles",
        "js": base + "Scripts"
    }
};


//compile sass files and prefix
gulp.task('sass', function () {
    return gulp.src(paths.src.sass)
        .pipe(sass({ sourcemap: true}))
        .pipe(prefix('last 2 versions', 'ie 8', 'ie 9'))
        .pipe(gulp.dest(paths.dest.css));
});

//minify css after sass task is run
gulp.task('minify-css', ['sass'], function () {
    return gulp.src(paths.src.css)
        .pipe(minify({ keepBreaks: true}))
        .pipe(rename({ suffix : '.min' }))
        .pipe(gulp.dest(paths.dest.css));
});

//concatenate all js and minify js
gulp.task('js', function () {
    return gulp.src(paths.src.js)
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.dest.js));
});

//build task minify css and js
gulp.task('build', ['minify-css', 'js'], function () { });


gulp.task('watch', function () {
    gulp.watch(paths.src.sass, ['minify-css']);
    gulp.watch(paths.src.js, ['js']);
});

gulp.task('default', ['build', 'watch'], function () { });