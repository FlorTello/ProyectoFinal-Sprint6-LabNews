'use strict';

const Detalle = (index) => {
  const contenedor = $(`<div class="container">
    <h1>`+state.selectedItem.title+`.
    </h1>
    <p>`+state.selectedItem.brief+`</p>
    <img src="assets/img/news/`+state.selectedItem.img+`" alt="" class="col-lg-12 col-xs-12">
      <div class="col-xs-12 col-lg-8">
        <img src="assets/img/authors/`+state.selectedItem.author.picture+`" alt="" class="col-lg-2 col-xs-2">
        <p>`+state.selectedItem.author.name+` <br> `+ state.selectedItem['published-date']+` <br> `+ state.selectedItem.author.user+`</p>

      </div>
      <div class="col-xs-12 col-lg-8">
        `+state.selectedItem.body+`
      </div>
      <div class="col-xs-12 col-lg-4">
        <h3>Notas Relacionadas</h3>
        <div class="col-xs-12">
          <div class="col-xs-6">
            <img src="" alt="">
            <h3>texto</h3>
          </div>
          <div class="col-xs-6">
            <img src="" alt="">
            <h3>texto</h3>
          </div>
        </div>
        <div class="col-xs-12">
          <img src="" alt="">
        </div>
      </div>
  </div>`);
  return contenedor;
}
