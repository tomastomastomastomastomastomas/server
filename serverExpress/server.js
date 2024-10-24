const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const port = 3000;

function deleteFile(file) {
  fs.unlink(file, (err) => {
    if (err) {
      console.log("error:", err);
      return;
    }
    console.log("Se elimino el archivo user.txt");
  });
}

function writeFile(file, addedData) {
  fs.writeFile(file, `${addedData}`, (err) => {
    if (err) {
      console.log("error:", err);
      return;
    }
    console.log("Se actualizaron los datos");
  });
}

function appendFile(file, addedData) {
  fs.appendFile(file, `${addedData}\n`, (err) => {
    if (err) {
      console.log("error:", err);
      return;
    }
    console.log("Se agregaron los datos");
  });
}

function readFile(file, send) {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.log("Archivo no encontrado");
      send("Not Found");
      return;
    }
    send(data);
  });
}

app.get("/user", (req, res) => {
  readFile("user.txt", (data) => {
    res.send(data);
  });
});

app.put("/user", (req, res) => {
  writeFile("user.txt", req.body);
  res.send("Se agregaron los datos a user.txt");
});

app.delete("/user", (req, res) => {
  deleteFile("user.txt");
  res.send("Archivo user eliminado");
});

app.post("/user", (req, res) => {
  appendFile("user.txt", req.body);
  res.send("Se agregaron los datos");
});

// const corsOptions = {
//   origin: ["http://localhost:5500", "http://127.0.0.1:5500"],
//   methods: "GET,POST,PUT,PATCH,DELETE,OPTIONS",
//   allowedHeaders: ["Content-Type", "Authorization"],
// };
// app.use(cors(corsOptions));
// app.use((req, res) => {
//   res.status(404).json({
//     error: "Ruta no encontrada",
//     status: 404,
//   });
// });

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
