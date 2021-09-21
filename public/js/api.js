// variables a utilizar 
let api_key="b68bbd0f8dbd787e0f14d0be9f1ca37f"; // api personal creada

// Regiones
let reg = 'certification_country='; // variable general para las regiones 
let Mexico = 'MX';
let Usa = 'US';

// idiomas para la pagina
let esMexico = 'es-MX';
let esEspain = 'es-Es';
let enUsa = 'en-Us';


// Clasificaciones 
let calif = '&certification='; // variable general para las certificaciones de las calificaciones 
let AdultosR = 'R.desc'; 


//Uso de apis
let idiomaES="api_key="+api_key+"&language="+esMexico;// para solicitar la busqueda en cierto idioma
let idiomaEN="api_key="+api_key+"&language="+enUsa;// para solicitar la busqueda en cierto idioma
let idioma=idiomaES;

//Mostrar en inicio peliculas populares 
let PeliPopular ="sort_by=popularity.desc?&" 


// para llamar la lista de peliculas 
let movie_http = "https://api.themoviedb.org/3/discover/movie?"; // api general de peliculas / para cuando los datos ya estanfiltrados 
let movie_popu_http= "https://api.themoviedb.org/3/discover/movie?&sort_by=popularity.desc&";  //para datos generales 
let genres_list_http = "http://api.themoviedb.org/3/genre/movie/list?"; // listar peliculas por generos 

// para obtener los recursos (imagenes) de las peliculas 
let img_url = "http://image.tmdb.org/t/p/w500"; 



// para obtener la informacion de la pelicula 
let original_img_url = "http://image.tmdb.org/t/p/original";// portada de la pelicula 
let movie_detail_http = "http://api.themoviedb.org/3/movie/"; // detalles de la pelicula 

function Recargar(){

  location.reload();
}

  



 
  
