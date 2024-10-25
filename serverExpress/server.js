const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(express.json());

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
  fs.writeFile(file, addedData, (err) => {
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
    res.send(JSON.stringify(data));
  });
});

app.put("/user", (req, res) => {
  writeFile("user.txt", JSON.stringify(req.body));
  res.send(JSON.stringify("Se agregaron los datos a user.txt"));
});

app.delete("/user", (req, res) => {
  deleteFile("user.txt");
  res.send(JSON.stringify("Archivo user eliminado"));
});

app.post("/user", (req, res) => {
  appendFile("user.txt", JSON.stringify(req.body));
  res.send(JSON.stringify("Se agregaron los datos"));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
