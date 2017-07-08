'use strict';

const  filtro= (array, id) => {
  return array.filter((e,i)=>{
      if(e.categories.indexOf(id) !== -1){
        return e;
      }
  });
};

const render = (root,data) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  if(state.page == 1){
    const categorias = $('<div class="allcategoria"></div>');
    wrapper.append(Header(state,_=>{ render(root) }));
    wrapper.append(Categorias(categorias,state.categories,_=>{ render(root) }));
    $('.carousel').carousel();
    wrapper.append(Footer(state,_=>{ render(root) }));

  }else{
    wrapper.append(Header(state,_=>{ render(root) }));
    wrapper.append(Detalle(state,_=>{ render(root) }));
    wrapper.append(Footer(state,_=>{ render(root) }));
  }
  root.append(wrapper);
}
const state = {
  page : 1,
  data: {},
  categories: {},
  main: []
};
$( _ => {
  const root = $("#root");
      getCategories().then((response) => {
          state.categories = response;
          getNews().then((response) => {
            state.data = response;
            state.categories.map((e,i) => {
              state.main.push(filtro(state.data,i));
            });
              render(root,state);
          });
     });

});
