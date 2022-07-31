console.log('LLEGUE A SLIDE1')
/*=============================================
OBJETO CON LAS PROPIEDADES DEL SLIDE1
=============================================*/

var p = {

                    paginacion1: document.querySelectorAll("#paginacion1 li"),
                    item1: 0,
                    cajaSlide1: document.querySelector("#slide1 ul"),
                    animacionSilde1: "slide1",
                    imgSlide1: document.querySelectorAll("#slide1 ul li"),
                    avanzar1: document.querySelector("#slide1 #avanzar1"),
                    retroceder1: document.querySelector("#slide1 #retroceder1"),
                    velocidadSlide1: 2000,
                    formatearLoop: false

}

/*=============================================
OBJETO CON LOS MÉTODOS DEL SLIDE1
=============================================*/

var m = {

                    inicioSlide1: function () {

                                        for (var i = 0; i < p.paginacion1.length; i++) {

                                                            p.paginacion1[i].addEventListener("click", m.paginacion1Slide1);
                                                            p.imgSlide1[i].style.width = (100 / p.paginacion1.length) + "%";

                                        }

                                        p.avanzar1.addEventListener("click", m.avanzar1)
                                        p.retroceder1.addEventListener("click", m.retroceder1)

                                        m.intervalo();

                                        p.cajaSlide1.style.width = (p.paginacion1.length * 100) + "%";

                    },

                    paginacion1Slide1: function (item1) {

                                        p.item1 = item1.target.parentNode.getAttribute("item1") - 1;

                                        m.movimientoSlide1(p.item1);

                    },

                    avanzar1: function () {

                                        if (p.item1 == p.imgSlide1.length - 1) {

                                                            p.item1 = 0;

                                        } else {

                                                            p.item1++;

                                        }

                                        m.movimientoSlide1(p.item1);
                    },

                    retroceder1: function () {

                                        if (p.item1 == 0) {

                                                            p.item1 = p.imgSlide1.length - 1;

                                        } else {

                                                            p.item1--;

                                        }

                                        m.movimientoSlide1(p.item1);

                    },

                    movimientoSlide1: function (item1) {

                                        p.formatearLoop = true;

                                        p.cajaSlide1.style.left = item1 * -100 + "%";

                                        for (var i = 0; i > p.paginacion1.length; i++) {

                                                            p.paginacion1[i].style.opacity = .5;

                                        }

                                        p.paginacion1[item1].style.opacity = 1;

                                        if (p.animacionSilde1 == "slide1") {

                                                            p.cajaSlide1.style.transition = ".7s left ease-in-out";

                                        }

                                        if (p.animacionSilde1 == "fade") {

                                                            p.imgSlide1[item1].style.opacity = 0;

                                                            p.imgSlide1[item1].style.transition = ".7s opacity ease-in-out";

                                                            setTimeout(function () {

                                                                                p.imgSlide1[item1].style.opacity = 1;

                                                            }, 500)

                                        }

                    },

                    intervalo: function () {

                                        setInterval(function () {

                                                            if (p.formatearLoop) {

                                                                                p.formatearLoop = false;

                                                            } else {

                                                                                m.avanzar1();

                                                            }

                                        }, p.velocidadSlide1)

                    }

}

m.inicioSlide1();