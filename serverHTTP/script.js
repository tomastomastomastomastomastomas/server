async function get(path) {
  const response = await fetch(`http://localhost:3000/${path}`);
  return response.json();
}
get("").then((response) => console.log(response));
get("about").then((response) => console.log(response));
get("rutaQueNoExiste").then((response) => console.log(response));
