import { createServer } from "node:http";
const PORT = 3000;
const DEFAULT_HEADER = { "Content-Type": "application/json" };

const routes = {
  "/heroes:get": async (request, response) => {
    const { id } = request.queryString;
    console.log({ id });
    return response.end();
  },
  default: (request, response) => {
    response.write("Home");
    response.end();
  },
};

const handler = (request, response) => {
  const { url, method } = request;
  const [_, route, id] = url.split("/");
  request.queryString = { id: isNaN(id) ? id : Number(id) };

  const key = `/${route}:${method.toLowerCase()}`;

  response.writeHead(200, DEFAULT_HEADER);

  const chosen = routes[key] || routes.default;
  return chosen(request, response);
};

createServer(handler)
  .listen(PORT, () => console.log("server running at", PORT));
