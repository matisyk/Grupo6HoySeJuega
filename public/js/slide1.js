console.log('LLEGUE A SLIDE1')
/*=============================================
OBJETO CON LAS PROPIEDADES DEL SLIDE1
=============================================*/

var pp = {

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

var mp = {

                    inicioSlide1: function () {

                                        for (var i = 0; i < pp.paginacion1.length; i++) {

                                                            pp.paginacion1[i].addEventListener("click", mp.paginacion1Slide1);
                                                            pp.imgSlide1[i].style.width = (100 / pp.paginacion1.length) + "%";

                                        }

                                        pp.avanzar1.addEventListener("click", mp.avanzar1)
                                        pp.retroceder1.addEventListener("click", mp.retroceder1)

                                        mp.intervalo();

                                        pp.cajaSlide1.style.width = (pp.paginacion1.length * 100) + "%";

                    },

                    paginacion1Slide1: function (item1) {

                                        pp.item1 = item1.target.parentNode.getAttribute("item1") - 1;

                                        mp.movimientoSlide1(pp.item1);

                    },

                    avanzar1: function () {

                                        if (pp.item1 == pp.imgSlide1.length - 1) {

                                                            pp.item1 = 0;

                                        } else {

                                                            pp.item1++;

                                        }

                                        mp.movimientoSlide1(pp.item1);
                    },

                    retroceder1: function () {

                                        if (pp.item1 == 0) {

                                                            pp.item1 = pp.imgSlide1.length - 1;

                                        } else {

                                                            pp.item1--;

                                        }

                                        mp.movimientoSlide1(pp.item1);

                    },

                    movimientoSlide1: function (item1) {

                                        pp.formatearLoop = true;

                                        pp.cajaSlide1.style.left = item1 * -100 + "%";

                                        for (var i = 0; i > pp.paginacion1.length; i++) {

                                                            pp.paginacion1[i].style.opacity = .5;

                                        }

                                        pp.paginacion1[item1].style.opacity = 1;

                                        if (pp.animacionSilde1 == "slide1") {

                                                            pp.cajaSlide1.style.transition = ".7s left ease-in-out";

                                        }

                                        if (pp.animacionSilde1 == "fade") {

                                                            pp.imgSlide1[item1].style.opacity = 0;

                                                            pp.imgSlide1[item1].style.transition = ".7s opacity ease-in-out";

                                                            setTimeout(function () {

                                                                                pp.imgSlide1[item1].style.opacity = 1;

                                                            }, 500)

                                        }

                    },

                    intervalo: function () {

                                        setInterval(function () {

                                                            if (pp.formatearLoop) {

                                                                                pp.formatearLoop = false;

                                                            } else {

                                                                                mp.avanzar1();

                                                            }

                                        }, pp.velocidadSlide1)

                    }

}

mp.inicioSlide1();