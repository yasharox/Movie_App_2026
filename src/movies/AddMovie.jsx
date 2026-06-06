import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { API } from "/global";

export function AddMovie() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");
  const [trailer, setTrailer] = useState("");
  const history = useHistory();

  const addMovie = () => {
    // copy of the movies and add new movies to it
    const newMovie = { name, image, summary, rating, trailer };

    // 1)Method : post >> 2) body- data & json >> 3) header - json data
    fetch(`${API}/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: { "Content-type": "application/json" },
    }) //returns a promise
      .then(() => history.push("/movies"));

    // setData([...data, newMovie]); // create newMovie and add to the existing
    // // resetForm();
  };

  return (
    <div className="add-movie-form">
      <h1> Add Movie Form </h1>

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

      <Button onClick={addMovie} variant="contained">
        Add Movie
      </Button>
    </div>
  );
}
