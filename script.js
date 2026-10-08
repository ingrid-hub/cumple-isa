const inicio = document.getElementById("inicio");
const regalo = document.getElementById("regalo");
const cumple = document.getElementById("cumple");
const final = document.getElementById("final");

const botonSorpresa = document.getElementById("botonSorpresa");
const caja = document.getElementById("caja");
const botonFinal = document.getElementById("botonFinal");

const textoCaja = document.getElementById("textoCaja");


/* =========================
   CAMBIAR DE PANTALLA
========================= */

function cambiarPantalla(actual, siguiente) {

    actual.classList.remove("activa");

    setTimeout(() => {

        siguiente.classList.add("activa");

    }, 500);

}


/* =========================
   ABRIR SORPRESA
========================= */

botonSorpresa.addEventListener("click", () => {

    cambiarPantalla(inicio, regalo);

});


/* =========================
   ABRIR REGALO
========================= */

caja.addEventListener("click", () => {

    caja.innerHTML = "🎁✨";

    textoCaja.innerHTML =
        "¡Sorpresa! 💜";

    crearCorazones();

    setTimeout(() => {

        cambiarPantalla(regalo, cumple);

    }, 1500);

});


/* =========================
   ÚLTIMA SORPRESA
========================= */

botonFinal.addEventListener("click", () => {

    crearConfeti();

    cambiarPantalla(cumple, final);

});


/* =========================
   CORAZONES
========================= */

function crearCorazones() {

    for (let i = 0; i < 20; i++) {

        const corazon = document.createElement("div");

        corazon.innerHTML = "💜";

        corazon.style.position = "fixed";

        corazon.style.left =
            Math.random() * 100 + "%";

        corazon.style.bottom = "-50px";

        corazon.style.fontSize =
            (Math.random() * 25 + 20) + "px";

        corazon.style.zIndex = "20";

        document.body.appendChild(corazon);


        const duracion =
            Math.random() * 3 + 3;


        corazon.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform:
                        `translateY(-110vh) rotate(360deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duracion * 1000,
                easing: "ease-out"
            }
        );


        setTimeout(() => {

            corazon.remove();

        }, duracion * 1000);

    }

}


/* =========================
   CONFETI
========================= */

function crearConfeti() {

    const simbolos = [
        "💜",
        "✨",
        "⭐",
        "🎉",
        "🎊"
    ];


    for (let i = 0; i < 60; i++) {

        const confeti =
            document.createElement("div");

        confeti.innerHTML =
            simbolos[
                Math.floor(
                    Math.random() *
                    simbolos.length
                )
            ];

        confeti.style.position = "fixed";

        confeti.style.left =
            Math.random() * 100 + "%";

        confeti.style.top = "-50px";

        confeti.style.fontSize =
            (Math.random() * 20 + 15) + "px";

        confeti.style.zIndex = "100";


        const duracion =
            Math.random() * 3 + 2;


        confeti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)"
                },

                {
                    transform:
                        `translateY(110vh) rotate(720deg)`
                }
            ],
            {
                duration:
                    duracion * 1000,

                easing: "linear"
            }
        );


        setTimeout(() => {

            confeti.remove();

        }, duracion * 1000);

    }

}