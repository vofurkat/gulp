// Gulp include
import gulp from "gulp";

// Plugins include
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import gulpPug from "gulp-pug";

// Url include
import url from "../settings/url.js";
// Option include
import option from "../settings/option.js";

// Pug task
export default () => {
    return gulp.src(url.pug.src)
    .pipe(plumber({
        errorHandler: notify.onError( error => ({
            title: "PUG",
            message: error.message
        }))
    }))
    .pipe(gulpPug(option.gulpPug))
    .pipe(gulp.dest(url.pug.dest))
}