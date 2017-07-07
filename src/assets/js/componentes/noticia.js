'use strict';

const Noticia = (item) => {
  if(item.type == 1){
    const noticia = $('<div class="thumbnail col-lg-12 col-xs-12"></div>');
    const img = $('<img class="col-xs-12 col-lg-12"src="assets/img/news/'+item.img+'" alt="">');
    const h1 = $('<h1 class="col-xs-12 col-lg-12">'+item.title+'</h1>');
    noticia.append(img,h1);
    return noticia;

  } else if(item.type == 2){
    const noticia = $('<div class="thumbnail col-lg-6 col-xs-12"></div>');
    const img = $('<img class="col-xs-6 col-lg-12"src="assets/img/news/'+item.img+'" alt="">');
    const h1 = $('<h1 class="col-xs-6 col-lg-12">'+item.title+'</h1>');
    noticia.append(img,h1);
    return noticia;

  }else if(item.type == 3){
    const noticia = $('<div class="thumbnail col-lg-3 col-xs-12"></div>');
    const img = $('<img class="col-xs-12 col-lg-12"src="assets/img/news/'+item.img+'" alt="">');
    const h1 = $('<h1 class="col-xs-12 col-lg-12">'+item.title+'</h1>');
    noticia.append(img,h1);
    return noticia;

  }else if(item.type == 4){
    const noticia = $('<div class="thumbnail col-lg-3"></div>');
    const img = $('<img class="col-xs-6 col-lg-12"src="assets/img/news/'+item.img+'" alt="">');
    const h1 = $('<h1 class="col-xs-6 col-lg-12">'+item.title+'</h1>');
    noticia.append(img,h1);
    return noticia;

  }else if(item.type == 5){
    const noticia = $('<div class="thumbnail col-lg-6"></div>');
    const img = $('<img class="col-xs-6 col-lg-6"src="assets/img/news/'+item.img+'" alt="">');
    const h1 = $('<h1 class="col-xs-6 col-lg-6">ghhgh</h1>');
    noticia.append(img,h1);
    return noticia;
  }


}
