const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require('gulp-plumber');

function css(done) {
    src("src/scss/**/*.scss") //Identifica el archivo .SCSS a compilar
        .pipe(plumber()) //añadimos un plumber, sirve para marcar error pero no para la compilacion
        .pipe(sass()) //lo compila
        .pipe(dest("build/css")); //almacenarla en el disco duro

    done(); //callback que avisa a gulp cuando llegamos al final

}

function dev(done) {
    watch("src/scss/**/*.scss", css)

    done();
}

exports.css = css;
exports.dev = dev;