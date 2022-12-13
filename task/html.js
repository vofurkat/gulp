// Gulp include
const {src,dest} = require("gulp");

// Plugins include
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const htmlMin = require("gulp-htmlmin");
const size = require("gulp-size");
const fileInclude = require("gulp-file-include");

// Url include
const url = require("../settings/url.js");

// Html task
const html = () => {
    return src(url.html.src)
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
    .pipe(dest(url.html.dest))
}

module.exports = html;
