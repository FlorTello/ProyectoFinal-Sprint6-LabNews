'use strict';

const Categorias = (contenedor,data, update) => {
  $.each(data,(index,item) => {
    console.log(item);
    const categoria = $('<section class="container-fluid '+item.title+'"></section>');
    categoria.append(itemCategoria(index,item.title));
    contenedor.append(categoria);

  });
  console.log(state.data);
  // reRender(container,data.boards,update)
  return contenedor;

}

const itemCategoria = (index, name) => {
  console.log(state.main[index]);
  const categoria = $('<div class="categoria container"></div>');
  $.each(state.main[index],(i,item) => {
    categoria.append(Noticia(item));
  });
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
