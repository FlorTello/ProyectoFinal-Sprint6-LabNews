'use strict';

const Noticia = (type,src,data) => {
  if(type == 1){
    const noticia = $('<div class="thumbnail col-lg-12 col-xs-12"></div>');
    const img = $('<img class="col-xs-12 col-lg-12"src="assets/img/foto-n1.png" alt="">');
    const titulo = $('<h1 class="col-xs-12 col-lg-12">ghhgh</h1>');
    noticia.append(img,h1);
  } else if(type == 2){
    const noticia = $('<div class="thumbnail col-lg-3 col-xs-12"></div>');
    const img = $('<img class="col-xs-12 col-lg-12"src="assets/img/foto-n1.png" alt="">');
    const titulo = $('<h1 class="col-xs-12 col-lg-12">ghhgh</h1>');
    noticia.append(img,h1);
  }else if(type == 3){
    const noticia = $('<div class="thumbnail col-lg-6 col-xs-12"></div>');
    const img = $('<img class="col-xs-6 col-lg-12"src="assets/img/foto-n1.png" alt="">');
    const titulo = $('<h1 class="col-xs-6 col-lg-12">ghhgh</h1>');
    noticia.append(img,h1);
  }else if(type == 4){
    const noticia = $('<div class="thumbnail col-lg-6"></div>');
    const img = $('<img class="col-xs-6 col-lg-12"src="assets/img/foto-n1.png" alt="">');
    const titulo = $('<h1 class="col-xs-6 col-lg-12">ghhgh</h1>');
    noticia.append(img,h1);
  }else if(type == 5){
    const noticia = $('<div class="thumbnail col-lg-6"></div>');
    const img = $('<img class="col-xs-6 col-lg-12"src="assets/img/foto-n1.png" alt="">');
    const titulo = $('<h1 class="col-xs-6 col-lg-12">ghhgh</h1>');
    noticia.append(img,h1);
  }

  return noticia;

}
