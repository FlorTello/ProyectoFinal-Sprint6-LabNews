'use strict';

const  filtro= (array, id) => {
  return array.filter((e)=>{
    if(e.categories.indexOf(id) !== -1 && e.categories == 3){
      return e;
    }
  });
};

const render = (root,data) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  const categorias = $('<div class=""></div>');
    wrapper.append(Header(state,_=>{ render(root) }));
    wrapper.append(Categorias(categorias,state.categories,_=>{ render(root) }));
    // wrapper.append(categories(state.categories,_=>{ render(root) }));

  root.append(wrapper);
}
const state = {
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
