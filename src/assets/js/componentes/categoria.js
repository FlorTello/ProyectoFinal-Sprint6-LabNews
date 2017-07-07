'use strict';

const Noticias = (update) => {
  const container = $('<div class="container categories"></div>');
  $.each(state.categories,(index,item) => {
    container.append(itemCategoria(index,name));
  });
  // reRender(container,data.boards,update)
  return container;

}

const ItemNoticia = (data, col_n,col_img,col_titulo) => {
  const noticia = $('<div class="thumbnail col-lg-'+col_n+' col-xs-12"></div>');
  const img = $('<img class="col-xs-6 col-lg'+col_img+'"src="assets/img/foto-n1.png" alt="">');
  const titulo = $('<h1 class="col-xs-6 col-lg'+col_titulo+'">ghhgh</h1>');

  noticia.append(img,h1);
  return noticia;

}
const itemCategoria = (index, name,data,update) => {
  const categoria = $('<div class="categoria"></div>');
  const name = $('<h2>'+name+'</h2>');
  categoria.append(name);
  // $.each(state.categories,(index,item) => {
  //   categoria.append(ItemNoticia(12,12));
  // });
  return categoria;
}

const reRender = (container,arrayBoard,update) => {
  container.empty();
  if (arrayBoard.length > 0) {
    $.each(arrayBoard,(index,item) => {
      container.append(itemBoard(index, item,update));
    });
  } else {
    container.append($('<p>Boards no encontrado</p>'));
  }
}
