//se usa express para manejar las rutas de las peticiones
const express = require("express");
const port = 800;
const path = require("path");

//configuramos para que el path inicial sea dentro de publico
let initial_path = path.join(__dirname, "public");

const app = express(); // hace referencia a la libreria de express
app.use(express.static(initial_path)); // para servir paginas html solamente no apis


//ruta de inicio, manda a llamar a la pagina de index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(initial_path, "index.html"));
});



app.get("/:id", (req, res) => {
  res.sendFile(path.join(initial_path, "about.html"));
});

app.use((req, res) => {
  res.json("404");
});

//inicia express en el puerto 3000
app.listen(port, () => {
  console.log(`EScuchando en puerto ${port}`);
});
