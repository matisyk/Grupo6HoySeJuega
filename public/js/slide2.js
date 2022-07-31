console.log('LLEGUE A SLIDE2')
/*=============================================
OBJETO CON LAS PROPIEDADES DEL SLIDE2
=============================================*/

var p = {

                    paginacion2: document.querySelectorAll("#paginacion2 li"),
                    item2: 0,
                    cajaSlide2: document.querySelector("#slide2 ul"),
                    animacionSilde2: "slide2",
                    imgSlide2: document.querySelectorAll("#slide2 ul li"),
                    avanzar2: document.querySelector("#slide2 #avanzar2"),
                    retroceder2: document.querySelector("#slide2 #retroceder2"),
                    velocidadSlide2: 2000,
                    formatearLoop: false

}

/*=============================================
OBJETO CON LOS MÉTODOS DEL SLIDE2
=============================================*/

var m = {

                    inicioSlide2: function () {

                                        for (var i = 0; i < p.paginacion2.length; i++) {

                                                            p.paginacion2[i].addEventListener("click", m.paginacion2Slide2);
                                                            p.imgSlide2[i].style.width = (100 / p.paginacion2.length) + "%";

                                        }

                                        p.avanzar2.addEventListener("click", m.avanzar2)
                                        p.retroceder2.addEventListener("click", m.retroceder2)

                                        m.intervalo();

                                        p.cajaSlide2.style.width = (p.paginacion2.length * 100) + "%";

                    },

                    paginacion2Slide2: function (item2) {

                                        p.item2 = item2.target.parentNode.getAttribute("item2") - 1;

                                        m.movimientoSlide2(p.item2);

                    },

                    avanzar2: function () {

                                        if (p.item2 == p.imgSlide2.length - 1) {

                                                            p.item2 = 0;

                                        } else {

                                                            p.item2++;

                                        }

                                        m.movimientoSlide2(p.item2);
                    },

                    retroceder2: function () {

                                        if (p.item2 == 0) {

                                                            p.item2 = p.imgSlide2.length - 1;

                                        } else {

                                                            p.item2--;

                                        }

                                        m.movimientoSlide2(p.item2);

                    },

                    movimientoSlide2: function (item2) {

                                        p.formatearLoop = true;

                                        p.cajaSlide2.style.left = item2 * -100 + "%";

                                        for (var i = 0; i > p.paginacion2.length; i++) {

                                                            p.paginacion2[i].style.opacity = .5;

                                        }

                                        p.paginacion2[item2].style.opacity = 1;

                                        if (p.animacionSilde2 == "slide2") {

                                                            p.cajaSlide2.style.transition = ".7s left ease-in-out";

                                        }

                                        if (p.animacionSilde2 == "fade") {

                                                            p.imgSlide2[item2].style.opacity = 0;

                                                            p.imgSlide2[item2].style.transition = ".7s opacity ease-in-out";

                                                            setTimeout(function () {

                                                                                p.imgSlide2[item2].style.opacity = 1;

                                                            }, 500)

                                        }

                    },

                    intervalo: function () {

                                        setInterval(function () {

                                                            if (p.formatearLoop) {

                                                                                p.formatearLoop = false;

                                                            } else {

                                                                                m.avanzar2();

                                                            }

                                        }, p.velocidadSlide2)

                    }

}

m.inicioSlide2();