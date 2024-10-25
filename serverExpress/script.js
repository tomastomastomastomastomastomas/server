async function get(path) {
  const response = await fetch(`http://localhost:3000/${path}`);
  return response.json();
}
async function put(path, data) {
  const response = await fetch(`http://localhost:3000/${path}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}
async function post(path, data) {
  const response = await fetch(`http://localhost:3000/${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}
async function deleteFile(path) {
  const response = await fetch(`http://localhost:3000/${path}`, {
    method: "DELETE",
  });
  return response.json();
}

get("user").then((data) => console.log(data));
put("user", { user: "bobo" }).then((data) => console.log(data));
post("user", { user: "wawa" }).then((data) => console.log(data));
deleteFile("user").then((data) => console.log(data));
