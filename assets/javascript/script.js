// Ejercicio 1 //

let guitarra = document.querySelector(".guitarra")


guitarra.addEventListener("click", () => {
    if (guitarra.style.border === "") {
        guitarra.style.border = "2px solid red";
    } else {
        guitarra.style.border = "";
    }
});


// Ejercicio 2 //

let planeta = (document.querySelector('#sticker1'))
let capibara =(document.querySelector("#sticker2"))
let vodka = (document.querySelector("#sticker3"))
let parrafo = document.querySelector("#n_de_stickers");
let botonDeVerificacion = document.querySelector("#verificacion");


botonDeVerificacion.addEventListener("click", () => {
    let InputPlaneta = parseInt(planeta.value);
    let InputCapibara = parseInt(capibara.value);
    let InputVodka = parseInt(vodka.value);
    let suma = InputPlaneta + InputCapibara + InputVodka
    if (suma < 11 ) {
        parrafo.innerHTML ="Llevas " + suma + " stickers";
    } else {
        parrafo.innerHTML ="Llevas damasiados stickers";
    }})

// Ejercicio 3 //

let pass1 = document.querySelector("#boton1");
let pass2 = document.querySelector("#boton2");
let pass3 = document.querySelector("#boton3");
let ingresar = document.querySelector("#ingreso");
let parrafopass = document.querySelector("#parrafoclave");

ingresar.addEventListener("click", () => {
    let Inputpass1 = parseInt(pass1.value);
    let Inputpass2 = parseInt(pass2.value);
    let Inputpass3 = parseInt(pass3.value);
    if (Inputpass1 == 9  && Inputpass2 == 1 &&  Inputpass3 == 1)  {
    parrafopass.innerHTML = "Password 1 correcto"
    }
    else if (Inputpass1 == 7  && Inputpass2 == 1 &&  Inputpass3 == 4)  {
        parrafopass.innerHTML = "Password 2 correcto"
    }
    else {
       parrafopass.innerHTML = "Password incorrecto"
    }
})