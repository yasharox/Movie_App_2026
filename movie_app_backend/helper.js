import { client } from "./index.js";

async function getMovies(filter) {
  return await client.db("b251we").collection("movies").find(filter).toArray();
}
async function createMovies(data) {
  return await client.db("b251we").collection("movies").insertMany(data);
}
async function getMoviesById(id) {
  return await client.db("b251we").collection("movies").findOne({ id: id });
}
async function deleteMovieById(id) {
  return await client.db("b251we").collection("movies").deleteOne({ id: id });
}
async function updateMovieById(id, updatedMovie) {
  return await client
    .db("b251we")
    .collection("movies")
    .updateOne({ id: id }, { $set: updatedMovie });
}

export {
  getMovies,
  createMovies,
  getMoviesById,
  deleteMovieById,
  updateMovieById,
};
