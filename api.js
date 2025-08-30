const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const movies = require("./movies.json");
const savedmovies = require("./savedmovies.json");
const port = process.env.PORT || 8001; //  chose port from here like 8080, 3001

server.use(middlewares);
const router = jsonServer.router({
  movies,
  savedmovies,
});

server.use(router);
server.listen(port);
