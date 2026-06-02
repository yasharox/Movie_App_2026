import Movie from "./Movie.jsx";
// import data from "../Data.js";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
import { useEffect, useState } from "react";

function MovieList() {
  const history = useHistory();

  const [movie, setMovie] = useState([]);

  const getMovies = () => {
    fetch(`https://6a1bf1008858a003817b5635.mockapi.io/movies/`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovie(mvs));
  };

  useEffect(getMovies, []);

  const removeMovie = (id) => {
    console.log("Deleting Movie", id);
    // remove movie logic with filter is simple
    // const removeMovieIndex = index;
    // const remainingMovies = movie.filter((mv, idx) => idx != removeMovieIndex);
    // console.log(movie, remainingMovies, index);
    // // and update it
    // setMovie(remainingMovies);
    // after deleting you have to refresh
    fetch(`https://6a1bf1008858a003817b5635.mockapi.io/movies/${id}`, {
      method: "DELETE",
    }).then(() => getMovies());
  };

  return (
    <section className="movie-list">
      {movie.map(({ name, image, rating, summary, id }) => (
        <Movie
          name={name}
          poster={image}
          rating={rating}
          summary={summary}
          id={id}
          editButton={
            <IconButton
              style={{ marginLeft: "auto" }}
              aria-label="edit"
              color="success"
              size="large"
              onClick={() => {
                history.push("/movies/edit/" + id);
              }} // edit  movie logic with  is simple
            >
              <EditIcon />
            </IconButton>
          }
          deleteButton={
            <IconButton
              aria-label="delete"
              color="error"
              size="large"
              onClick={() => {
                removeMovie(id);
              }} // remove movie logic with filter is simple
            >
              <DeleteIcon />
            </IconButton>
          }
        />
      ))}
    </section>
  );
}

export default MovieList;
