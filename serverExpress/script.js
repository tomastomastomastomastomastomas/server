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
