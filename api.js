const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// Import JSON files
const moviesData = require("./movies.json");
const savedMoviesData = require("./savedmovies.json");

// Flatten so json-server sees top-level arrays
const router = jsonServer.router({
  movies: moviesData.movies, // expose /movies
  searchedlabels: moviesData.searchedlabels, // expose /searchedlabels
  items: savedMoviesData.items, // expose /items
});

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 8001;
server.listen(port, () => {
  console.log(`JSON Server running on port ${port}`);
});
