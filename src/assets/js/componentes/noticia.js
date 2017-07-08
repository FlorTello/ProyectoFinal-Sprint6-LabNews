'use strict';

const Noticia = (item,index,update) => {
  if(item.type == 1){
    const noticia = $('<div class="thumbnail img-'+item.categories[0]+' type-'+item.type+' item-notice col-lg-12 col-xs-12"></div>');
    const img = $('<img class="col-xs-12 col-lg-12"src="assets/img/news/'+item.img+'" alt="">');
    const h4 = $('<h4 class="col-xs-12 col-lg-12">'+item.title+'</h4>');
    noticia.append(img,h4);
    noticia.on('click',(e)=>{
      state.page = 2;
      state.selectedItem =item;
      update();
    });
    return noticia;

  } else if(item.type == 2){
    const noticia = $('<div class="thumbnail img-'+item.categories[0]+' type-'+item.type+' item-notice col-lg-6 col-xs-12"></div>');
    const img = $('<img class="col-xs-6 col-lg-12"src="assets/img/news/'+item.img+'" alt="">');
    const h4 = $('<h4 class="col-xs-6 col-lg-12">'+item.title+'</h4>');
    noticia.append(img,h4);
    noticia.on('click',(e)=>{
      state.page = 2;
      state.selectedItem =item;
      update();
    });
    return noticia;

  }else if(item.type == 3){
    const noticia = $('<div class="thumbnail img-'+item.categories[0]+' type-'+item.type+' item-notice col-lg-3 col-xs-12"></div>');
    const img = $('<img class="col-xs-12 col-lg-12"src="assets/img/news/'+item.img+'" alt="">');
    const h4 = $('<h4 class="col-xs-12 col-lg-12">'+item.title+'</h4>');
    noticia.append(img,h4);
    noticia.on('click',(e)=>{
      state.page = 2;
      state.selectedItem =item;
      update();
    });
    return noticia;

  }else if(item.type == 4){
    const noticia = $('<div class="thumbnail img-'+item.categories[0]+' type-'+item.type+' item-notice col-lg-3 item"></div>');
    const img = $('<img class="col-xs-6 col-lg-12"src="assets/img/news/'+item.img+'" alt="">');
    const h4 = $('<h4 class="col-xs-6 col-lg-12">'+item.title+'</h4>');
    noticia.append(img,h4);
    noticia.on('click',(e)=>{
      state.page = 2;
      state.selectedItem =item;
      update();
    });
    return noticia;

  }else if(item.type == 5){
    const noticia = $('<div class="thumbnail img-'+item.categories[0]+' type-'+item.type+' item-notice col-lg-6 item"></div>');
    const img = $('<img class="col-xs-6 col-lg-6"src="assets/img/news/'+item.img+'" alt="">');
    const h4 = $('<h4 class="col-xs-6 col-lg-6">ghhgh</h4>');
    noticia.append(img,h4);
    noticia.on('click',(e)=>{
      state.page = 2;
      state.selectedItem =item;
      update();
    });
    return noticia;
  }


}
