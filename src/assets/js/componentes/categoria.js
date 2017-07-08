'use strict';

const Categorias = (contenedor,data, update) => {
  $.each(data,(index,item) => {
    console.log(item);
    if(item.title == "carrousel"){
      const carousel = $('<div id="myCarousel" class="container carousel slide "><div>');
      categoria = $('<div class="carousel-inner"></div>');
      const controles = $(`<a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <h1 class=""><</h1>
      </a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <h1 class="">></h1>
      </a>`);

      categoria.append(itemCategoria(index,item.title,update));
      carousel.append(categoria);
      carousel.append(categoria);
      carousel.append(controles);
      contenedor.append(carousel);
    }else{
      const categoria = $('<section class="container '+item.title+'"></section>');
      categoria.append(itemCategoria(index,item.title,update));
      contenedor.append(categoria);
    }

  });
  console.log(state.data);
  return contenedor;

}

const itemCategoria = (index, name, update) => {
  console.log(state.main[index]);
  const categoria = $('<div class=" row categoria"></div>');
  $.each(state.main[index],(i,item) => {
    categoria.append(Noticia(item,i,update));
  });
  return categoria;
}
