const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === "GET" && req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify("Bienvenido, te conectaste al servidor"));
  } else if (req.method === "GET" && req.url === "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    let response = {
      userName: "nombreDeUsuario?",
      data: {
        age: "edad?",
        location: "lugar?",
      },
    };

    res.end(JSON.stringify(response));
  } else {
    res.statusCode = 404;

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(`${req.url} Error, buscate otra ruta`));
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
