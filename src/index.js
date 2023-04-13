import { createServer } from "node:http";
import { generateInstance } from "./factories/HeroFactory.js";
import { Hero } from "./entities/Hero.js";

const PORT = 3000;
const DEFAULT_HEADER = { "Content-Type": "application/json" };
const heroService = generateInstance();

const routes = {
  "/heroes:get": async (request, response) => {
    const { id } = request.queryString;
    const heroes = await heroService.find(id);
    response.write(JSON.stringify({ results: heroes }));
    return response.end();
  },
  "heroes:post": async (request, response) => {
    for await (const data of request) {
      const item = JSON.parse(data);
      console.log(item);
      response.end("OK");
    }
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

createServer(handler).listen(PORT, () =>
  console.log("server running at", PORT)
);
