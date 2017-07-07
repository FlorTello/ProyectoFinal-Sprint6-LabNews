
'use strict';
const Header = (data,update) => {
    console.log(data);
    const header = $('<header></header>');
    const menu = $(`<div class="container row">
      <div class="col-xs-4 col-xs-offset-5 visible-lg">
        <a class="" href="#"><img src="assets/img/logoicon.png" class="logo" alt="" width="100%"></a>
        <div class="text-center"><br>
          <p>Lunes, Julio 08 de 201   |    22°</p>
        </div>
      </div>
    </div>`);
    const nav = $(`<nav class="navbar navbar-default" role="navigation">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse"
                data-target=".navbar-ex1-collapse">
          <span class="sr-only">Desplegar navegación</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class=" visible-xs" href="#"><img src="assets/img/logoicon.png" class="logo" alt="" width="100%"></a>
      </div>
      <div class="collapse navbar-collapse navbar-ex1-collapse">
        <ul class="nav navbar-nav">
          <li><a href="#">Lo último</a></li>
          <li><a href="#">Opinión</a></li>
          <li><a href="#">Cultura</a></li>
          <li><a href="#">Perú</a></li>
          <li><a href="#">Tecología</a></li>
          <li><a href="#">Mundo</a></li>
          <li><a href="#">Economía</a></li>
          <li><a href="#">Lifestyle</a></li>
          <li><a href="#">Deporte</a></li>
        </ul>
      </div>
      </nav>`);
      const titular = $('<div class="row"><img src="../assets/img/news/'+data[0].img+'"><span class="titular"><h1>'+data[0].title+'</h1></span></div>');
      const main = $('<div class="container"></div>');
      const row = $('<div class="row"></div>');
      const secundarios = $(`<div class="col-lg-6 col-xs-12">
          <img class="col-xs-12 col-lg-12" src="assets/img/foto-n1.png" alt="">
          <h1 class="col-xs-12 col-lg-12 text-center">ghhgh</h1>
        </div>
        <div class="col-lg-3 col-xs-12">
          <img class="col-xs-6 col-lg-12"src="assets/img/foto-n1.png" alt="">
          <h1 class="col-xs-6 col-lg-12">ghhgh</h1>
        </div>
        <div class="col-lg-3 col-xs-12">
          <img class="col-xs-6 col-lg-12"src="assets/img/foto-n1.png" alt="">
          <h1 class="col-xs-6 col-lg-12">ghhgh</h1>
        </div>`);
      row.append(secundarios);
      main.append(row);
      header.append(menu,nav, titular, row);
      return header;
}
