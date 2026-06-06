import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
// import data from "./Data";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useEffect, useState } from "react";
import { API } from "/global";

export function MovieDetails() {
  const history = useHistory();
  const { id } = useParams();

  // const movie = data[id];
  // console.log(data, movie);

  // const movie = data.find((mv) => mv.id === id);

  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`${API}/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovie(mvs));
  }, [id]);

  return (
    <div>
      <iframe
        width="100%"
        height="780"
        src={movie.trailer}
        title="The Expendables 3 Official Trailer #1 (2014) - Sylvester Stallone Movie HD"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      <div className="movie-detail-container">
        <div className="movie-specs">
          <h3 className="movie-name"> {movie.name}</h3>
          <p className="movie-rating">{movie.rating}</p>
        </div>

        <p className="movie-summary"> {movie.summary}</p>

        <Button
          onClick={() => history.goBack()}
          variant="contained"
          color="inherit"
          startIcon={<KeyboardBackspaceIcon />}
        >
          Back
        </Button>
      </div>
    </div>
  );
}

export default MovieDetails;
