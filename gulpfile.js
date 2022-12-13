// Gulp include
import gulp from "gulp";

// Server include
import browserSync from "browser-sync";

// Clear (del)
import clear from "./task/clear.js";

// Url include
import url from "./settings/url.js";

// Option include
import option from "./settings/option.js";

// Pug
import pug from "./task/pug.js";

// Scss
import scss from "./task/scss.js";

// Font
import font from "./task/font.js";

// Image
import image from "./task/image.js";

// Js
import script from "./task/script.js";


// Watching
const watching = () => {
    gulp.watch(url.pug.watch, pug).on("all", browserSync.reload);
    gulp.watch(url.scss.watch, scss).on("all", browserSync.reload);
    gulp.watch(url.font.watch, font).on("all", browserSync.reload);
    gulp.watch(url.img.watch, image).on("all", browserSync.reload);
    gulp.watch(url.js.watch, script).on("all", browserSync.reload);
}

// Server
const server = () => {
    browserSync.init({
        server: {
            baseDir: url.ready
        }
    });
}

const webFotns = () => {
    return gulp.src(["./node_modules/@fortawesome/fontawesome-free/webfonts/*.{ttf,woff2}","./node_modules/bootstrap-icons/font/fonts/*.{woff,woff2}"])
    .pipe(gulp.dest(url.ready + "/font"))
}

// Build
const build = gulp.series(
    clear,
    gulp.parallel(pug,scss,font,image,script,webFotns)
);

const dev = gulp.series(
    build,
    gulp.parallel(watching,server)
);

// Command
export default option.isP
    ? build
    : dev;