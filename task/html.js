// Gulp include
import gulp from "gulp";

// Plugins include
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import htmlMin from "gulp-htmlmin";
import size from "gulp-size";
import fileInclude from "gulp-file-include";

// Url include
import url from "../settings/url.js";

// Html task
export default () => {
    return gulp.src(url.html.src)
    .pipe(plumber({
        errorHandler: notify.onError( error => ({
            title: "HTML",
            message: error.message
        }))
    }))
    .pipe(fileInclude())
    .pipe(size({
        title: ".html"
    }))
    .pipe(htmlMin({
        collapseWhitespace: false
    }))
    .pipe(size({
        title: ".html->min"
    }))
    .pipe(gulp.dest(url.html.dest))
}