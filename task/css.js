// Gulp include
const {src,dest} = require("gulp");

// Plugins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const size = require("gulp-size");
const concat = require("gulp-concat");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const cssimport = require("gulp-cssimport");
const autoprefixer = require("gulp-autoprefixer");

// Url include
const url = require("../settings/url.js");

// Css task
const style = () => {
    return src(url.css.src,{ sourcemaps: true })
    .pipe(plumber({
        errorHandler: notify.onError( error => ({
            title: "CSS",
            message: error.message
        }))
    }))
    .pipe(cssimport())
    .pipe(autoprefixer())
    .pipe(concat("main.css"))
    .pipe(dest(url.css.dest,{ sourcemaps: true }))
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
    .pipe(dest(url.css.dest,{ sourcemaps: true }))
}

module.exports = style;
