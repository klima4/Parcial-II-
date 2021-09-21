const main = document.querySelector(".main");

//primero consigue el listado de peliculas general
//consulta general donde se filtran los objetos que se requieren
fetch(
    movie_popu_http +
      new URLSearchParams({
        api_key: api_key, 
        languaje: idioma,
        page: 1,
      })
  )
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach((item) => {  // results es el objeto que contiene  id y title
        fetchListaPeliculasPorPopularidad(item.id, item.title);/// desde moviepopular obtenemos el id y el titulo
       
        construirElementoCategoriaP(`${item.title}`, item.id);        
      });
    });
  
  const fetchListaPeliculasPorPopularidad = (id, titles) => { // consulta solo con los elementos fintrados 
    fetch(
      movie_http +
        new URLSearchParams({
          api_key: api_key,
          titles: id,
          page:1,
          
         // page: Math.floor(Math.random() * 3) + 1, //trae pagina al azar
        })
    )
      .then((res) => res.json())
      .then((data) => {
      //console.log(data);
      construirElementoCategoriaP(`${titles}`, data.results); // le mando parametros a la clase para construir las tablas 
    })
      .catch((err) => console.log(err));
  };
  

  /* crea tabla 1. */ 
  const construirElementoCategoriaP = (category,data) => {
    main.innerHTML += `
      
      <div class="grid" id="${category}"> 
  <div class="a" id="${category}" ></div> 
  <div class="b" id="${category}" ></div>
  <div class="c"id="${category}" ></div>
  </div>
      `;
        construirTarjetas(category, data);  //crear tarjeta  
   
  };
  
  const construirTarjetas = (id, data) => {  // cpnstruir tarjetas de las tablas 
     
    const movieContainer = document.getElementById(id);
    data.forEach((item, i) => { // obtener portada 
      if (item.backdrop_path == null) {
        item.backdrop_path = item.poster_path;
        if (item.backdrop_path == null) {
          return;
        }
      }
  
      // para generar la tarjeta interactica 
      movieContainer.innerHTML += ` 


          <div class="movie" onclick="location.href = '/${item.id}'">
              <img src="${img_url}${item.backdrop_path}" alt="">
              <p class="movie-titl'e">${item.title}</p>
          </div>
          `;
  
    });
  };
  var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}