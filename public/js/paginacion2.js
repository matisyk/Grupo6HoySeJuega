console.log('LLEGUE A PAGINACION2')
/*=============================================
OBJETO CON LAS PROPIEDADES DEL SLIDE
=============================================*/

var p = {

                    paginacion2: document.querySelectorAll("#paginacion2 li"),
                    item: 0,
                    cajaSlide: document.querySelector("#slide2 ul")

}


/*=============================================
OBJETO CON LOS MÉTODOS DEL SLIDE
=============================================*/

var m = {

                    inicioSlide2: function () {

                                        for (var i = 0; i < p.paginacion2.length; i++) {

                                                            p.paginacion2[i].addEventListener("click", m.paginacion2Slide2)

                                        }

                    },

                    paginacion2Slide2: function (item) {


                                        p.item = item.target.parentNode.getAttribute("item") - 1;

                                        m.movimientoSlide(p.item);

                    },

                    movimientoSlide2: function (item) {

                                        p.cajaSlide2.style.left = item * -100 + "%";
                                        console.log(item * -100 + "%");


                    }

}

m.inicioSlide2();