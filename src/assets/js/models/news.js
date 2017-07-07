const getNews = () => {
  return new Promise((resolve,reject) => {
   $.get('/api/news/',(response,req,estado) => {
     if (estado.status != 200){
      reject(new Error("Error al obtener datos"));
    }else{
      resolve(response);
    }
   });
 });
}
const getNewsId= (id) => {
  return new Promise((resolve,reject) => {
   $.get('/api/news/:'+id+'',(response,req,estado) => {
     if (estado.status != 200){
      reject(new Error("Error al obtener datos"));
    }else{
      resolve(response);
    }
   });
 });
}
const getCategories= () => {
  return new Promise((resolve,reject) => {
    $.get('/api/categories/',(response,req,estado) => {
     if (estado.status != 200){
      reject(new Error("Error al obtener datos"));
    }else{
      resolve(response);
    }
   });
 });
}
const getCategoriesId= (id) => {
  return new Promise((resolve,reject) => {
    $.get('/api/categories/:'+id+'',(response,req,estado) => {
     if (estado.status != 200){
      reject(new Error("Error al obtener datos"));
    }else{
      resolve(response);
    }
   });
 });
}
