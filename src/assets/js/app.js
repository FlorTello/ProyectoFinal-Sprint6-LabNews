'use strict';

const render = (root,data) => {
  root.empty();
  console.log(data);
  const wrapper = $('<div class="wrapper"></div>');
  if(state.page == 1){
    wrapper.append(Header(data,_=>{ render(root) }));
    wrapper.append(Board(data,_=>{ render(root) }));
  }else{
    // wrapper.append(Board(data,_=>{ render(root) }));
  }

  root.append(wrapper);
}
const state = {
  page: 1,
  data: {},
  categories: {}
};
$( _ => {
  const root = $("#root");
      getCategories().then((response) => {
          state.categories = response;
          getNews().then((response) => {
              render(root,state.data);
          });
          state.data = response;
          render(root,state.data);
     });
});
