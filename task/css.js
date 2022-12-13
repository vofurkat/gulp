// Gulp include
import gulp from "gulp";

// Plugins
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import size from "gulp-size";
import concat from "gulp-concat";
import csso from "gulp-csso";
import rename from "gulp-rename";
import cssimport from "gulp-cssimport";
import autoprefixer from "gulp-autoprefixer";

// Url include
import url from"../settings/url.js";

// Css task
export default () => {
    return gulp.src(url.css.src,{ sourcemaps: true })
    .pipe(plumber({
        errorHandler: notify.onError( error => ({
            title: "CSS",
            message: error.message
        }))
    }))
    .pipe(cssimport())
    .pipe(autoprefixer())
    .pipe(concat("main.css"))
    .pipe(gulp.dest(url.css.dest,{ sourcemaps: true }))
    .pipe(size({
        title: ".css"
    }))
    .pipe(csso())
    .pipe(size({
        title: ".css->min.css"
    }))
    .pipe(rename({
        suffix: ".min"
    }))
    .pipe(gulp.dest(url.css.dest,{ sourcemaps: true }))
}
