/*=============================================
OBJETO CON LAS PROPIEDADES DEL SLIDE
=============================================*/

var ppp = {

    paginacion: document.querySelectorAll("#paginacion li"),
    item: 0,
    cajaSlide: document.querySelector("#slide ul"),
    animacionSilde: "slide",
    imgSlide: document.querySelectorAll("#slide ul li"),
    avanzar: document.querySelector("#slide #avanzar"),
    retroceder: document.querySelector("#slide #retroceder"),
    velocidadSlide: 2000,
    formatearLoop: false

}

/*=============================================
OBJETO CON LOS MÉTODOS DEL SLIDE
=============================================*/

var mmm = {

    inicioSlide: function () {

        for (var i = 0; i < ppp.paginacion.length; i++) {

            ppp.paginacion[i].addEventListener("click", mmm.paginacionSlide);
            ppp.imgSlide[i].style.width = (100 / ppp.paginacion.length) + "%";

        }

        ppp.avanzar.addEventListener("click", mmm.avanzar)
        ppp.retroceder.addEventListener("click", mmm.retroceder)

        mmm.intervalo();

        ppp.cajaSlide.style.width = (ppp.paginacion.length * 100) + "%";

    },

    paginacionSlide: function (item) {

        ppp.item = item.target.parentNode.getAttribute("item") - 1;

        mmm.movimientoSlide(ppp.item);

    },

    avanzar: function () {

        if (ppp.item == ppp.imgSlide.length - 1) {

            ppp.item = 0;

        } else {

            ppp.item++;

        }

        mmm.movimientoSlide(ppp.item);
    },

    retroceder: function () {

        if (ppp.item == 0) {

            ppp.item = ppp.imgSlide.length - 1;

        } else {

            ppp.item--;

        }

        mmm.movimientoSlide(ppp.item);

    },

    movimientoSlide: function (item) {

        ppp.formatearLoop = true;

        ppp.cajaSlide.style.left = item * -100 + "%";

        for (var i = 0; i < ppp.paginacion.length; i++) {

            ppp.paginacion[i].style.opacity = .5;

        }

        ppp.paginacion[item].style.opacity = 1;

        if (ppp.animacionSilde == "slide") {

            ppp.cajaSlide.style.transition = ".7s left ease-in-out";

        }

        if (ppp.animacionSilde == "fade") {

            ppp.imgSlide[item].style.opacity = 0;

            ppp.imgSlide[item].style.transition = ".7s opacity ease-in-out";

            setTimeout(function () {

                ppp.imgSlide[item].style.opacity = 1;

            }, 500)

        }

    },

    intervalo: function () {

        setInterval(function () {

            if (ppp.formatearLoop) {

                ppp.formatearLoop = false;

            } else {

                mmm.avanzar();

            }

        }, ppp.velocidadSlide)

    }

}

mmm.inicioSlide();