import Movie from "./Movie.jsx";
// import data from "../Data.js";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
import { useEffect, useState } from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

import { API } from "/global";

function MovieList() {
  const history = useHistory();

  const [movie, setMovie] = useState([]);

  const [open, setOpen] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const getMovies = () => {
    fetch(`${API}/movies/`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovie(mvs));
  };

  useEffect(getMovies, []);

  // const removeMovie = (id) => {
  //   console.log("Deleting Movie", id);
  //   // remove movie logic with filter is simple
  //   // const removeMovieIndex = index;
  //   // const remainingMovies = movie.filter((mv, idx) => idx != removeMovieIndex);
  //   // console.log(movie, remainingMovies, index);
  //   // // and update it
  //   // setMovie(remainingMovies);
  //   // after deleting you have to refresh
  //   fetch(`${API}/movies/${id}`, {
  //     method: "DELETE",
  //   }).then(() => getMovies());
  // };

  const handleDeleteClick = (id) => {
    setSelectedMovieId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMovieId(null);
  };

  const handleConfirmDelete = () => {
    fetch(`${API}/movies/${selectedMovieId}`, {
      method: "DELETE",
    }).then(() => {
      getMovies();
      handleClose();
    });
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
              // onClick={() => {
              //   removeMovie(id);
              // }} // remove movie logic with filter is simple

              onClick={() => {
                handleDeleteClick(id);
              }}
            >
              <DeleteIcon />
            </IconButton>
          }
        />
      ))}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete Movie?</DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Delete this movie permanently? This action cannot be undone.
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>No</Button>

          <Button
            color="error"
            variant="contained"
            onClick={handleConfirmDelete}
            autoFocus
          >
            Yes, Delete
          </Button>
        </DialogActions>
      </Dialog>
    </section>
  );
}

export default MovieList;
