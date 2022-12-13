// Gulp include
import gulp from "gulp";

// Plugins
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import size from "gulp-size";
import csso from "gulp-csso";
import rename from "gulp-rename";
import autoprefixer from "gulp-autoprefixer";
import gulpSass from "gulp-sass";
import nodeSass from "sass";
import gulpIf from "gulp-if";
import sassGlob from "gulp-sass-glob";
import nodeSassImporter from "node-sass-tilde-importer";
import mediaQueryGroup from "gulp-group-css-media-queries";
const sass = gulpSass(nodeSass);

// Url include
import url from "../settings/url.js";

// Option include
import option from "../settings/option.js";

// Scss task
export default () => {
    return gulp.src(url.scss.src,{ sourcemaps: true })
    .pipe(plumber({
        errorHandler: notify.onError( error => ({
            title: "SCSS",
            message: error.message
        }))
    }))
    .pipe(sassGlob())
    .pipe(sass({
        importer: nodeSassImporter
    }))
    .pipe(gulpIf(option.isP, autoprefixer()))
    .pipe(mediaQueryGroup())
    .pipe(gulp.dest(url.scss.dest,{ sourcemaps: true }))
    .pipe(size({
        title: ".css"
    }))
    .pipe(gulpIf(option.isP, csso()))
    .pipe(size({
        title: ".css->min.css"
    }))
    .pipe(rename({
        suffix: ".min"
    }))
    .pipe(gulp.dest(url.scss.dest,{ sourcemaps: true }))
}
