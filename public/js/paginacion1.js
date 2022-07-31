console.log('LLEGUE A PAGINACION1')
/*=============================================
OBJETO CON LAS PROPIEDADES DEL SLIDE
=============================================*/

var p = {

                    paginacion1: document.querySelectorAll("#paginacion1 li"),
                    item: 0,
                    cajaSlide: document.querySelector("#slide1 ul")

}


/*=============================================
OBJETO CON LOS MÉTODOS DEL SLIDE
=============================================*/

var m = {

                    inicioSlide1: function () {

                                        for (var i = 0; i < p.paginacion1.length; i++) {

                                                            p.paginacion1[i].addEventListener("click", m.paginacion1Slide1)

                                        }

                    },

                    paginacion1Slide1: function (item) {


                                        p.item = item.target.parentNode.getAttribute("item") - 1;

                                        m.movimientoSlide(p.item);

                    },

                    movimientoSlide1: function (item) {

                                        p.cajaSlide1.style.left = item * -100 + "%";
                                        console.log(item * -100 + "%");


                    }

}

m.inicioSlide1();