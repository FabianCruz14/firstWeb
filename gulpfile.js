const { src, dest, watch, parallel } = require("gulp");

//CSS
const sass = require("gulp-sass")(require("sass"));
const plumber = require('gulp-plumber');
const { compileString } = require("sass");

//IMAGE
const webp = require('gulp-webp');

function css(done) {
    src("src/scss/**/*.scss") //Identifica el archivo .SCSS a compilar
        .pipe(plumber()) //añadimos un plumber, sirve para marcar error pero no para la compilacion
        .pipe(sass()) //lo compila
        .pipe(dest("build/css")); //almacenarla en el disco duro

    done(); //callback que avisa a gulp cuando llegamos al final

}

function versionWebp(done) {
    const opciones = {
        quality: 50
    };

    src('src/img/**/*.{png,jpg}')
        .pipe(webp(opciones))
        .pipe(dest('build/img'))

    done();
}

function dev(done) {
    watch("src/scss/**/*.scss", css)

    done();
}

exports.css = css;
exports.versionWebp = versionWebp;
exports.dev = parallel(versionWebp, dev);