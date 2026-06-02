import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

import { useEffect, useState } from "react";

// HOC - higher order component parent -(Data) - child (Display) >> breaking into two components and passing data
export function EditMovie() {
  const { id } = useParams();

  // const movie = data[id];
  // console.log(data, movie);

  const [movie, setMovie] = useState(null); // to do conditional rendering  set here null

  useEffect(() => {
    fetch(`https://6a1bf1008858a003817b5635.mockapi.io/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovie(mvs));
  }, [id]);

  // until the movie data is available do not set the form
  // due to the race function the movie data is set undefined before it fetchs from mock api
  // solution: conditional  rendering
  // console.log(movie, movie.name, movie.summary);

  // use ternary below to fix data racing
  return movie ? <UpdateMovie movie={movie} /> : "";
}

function UpdateMovie({ movie }) {
  const history = useHistory();

  const [name, setName] = useState(movie.name);
  const [image, setImage] = useState(movie.image);
  const [summary, setSummary] = useState(movie.summary);
  const [rating, setRating] = useState(movie.rating);
  const [trailer, setTrailer] = useState(movie.trailer);

  const editMovie = () => {
    const updateMovie = { name, image, summary, rating, trailer };
    // create copy of the movies and add replace the edited movies to it

    // 1)Method : put >> 2) body- data & json >> 3) header - json data
    fetch(`https://6a1bf1008858a003817b5635.mockapi.io/movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(updateMovie),
      headers: { "Content-type": "application/json" },
    }) //returns a promise
      .then(() => history.push("/movies"));

    // const copyMovies = [...data];
    // copyMovies[id] = updateMovie;
    // setData(copyMovies); // create newMovie and add to the existing
    // history.push("/movies");
  };

  return (
    <div className="add-movie-form">
      <h1> Edit Movie Form </h1>

      <TextField
        id="outlined-basic"
        label="Movie name"
        variant="outlined"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <TextField
        id="outlined-basic"
        label="Movie poster URL"
        variant="outlined"
        value={image}
        onChange={(event) => setImage(event.target.value)}
      />

      <TextField
        id="outlined-basic"
        label="Movie summary"
        variant="outlined"
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
      />

      <TextField
        id="outlined-basic"
        label="Movie rating"
        variant="outlined"
        value={rating}
        onChange={(event) => setRating(event.target.value)}
      />

      <TextField
        id="outlined-basic"
        label="Movie trailer"
        variant="outlined"
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
      />

      <Button onClick={editMovie} color="success" variant="contained">
        SAVE
      </Button>
    </div>
  );
}
