// const { src, dest, watch } = require("gulp");
// const sass = require("gulp-sass")(require("sass"));

// function css(done) {
//     src("src/scss/app.scss") //Identifica el archivo SASS dentro de la carpeta src
//         .pipe(sass()) //lo compila
//         .pipe(dest("build/css")) //almacenarla en el disco duro

//     done(); //callback que avisa a gulp cuando llegamos al final

// }
// function dev(done) {
//     watch("src/scss/app.scss", css)


//     done();
// }

// exports.dev = dev;
function tarea(done) {
    console.log("MI PRIMER TAREA");
    done();
}
exports.tarea = tarea;