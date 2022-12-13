// Gulp include
import gulp from "gulp";

// Plugins include
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import webpack from "webpack-stream";

// Url include
import url from "../settings/url.js";
// Option include
import option from "../settings/option.js";

// Js task
export default () => {
    return gulp.src(url.js.src)
    .pipe(plumber({
        errorHandler: notify.onError( error => ({
            title: "JS",
            message: error.message
        }))
    }))
    .pipe(webpack({
        mode: option.isP ? "production" : "development"
    }))
    .pipe(gulp.dest(url.js.dest))
}