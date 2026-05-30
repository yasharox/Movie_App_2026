import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import data from '../Data';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export function AddMovie ({data, setData }){

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");
  const [trailer, setTrailer] = useState("");
  const history = useHistory();

//   const resetForm = () => {
//     setName("");
//     setImage("");
//     setSummary("");
//     setRating("");
//   };


  const addMovie = () => {
    // copy of the movies and add new movies to it              
    const newMovie = { name, image, summary, rating, trailer };
    setData([...data, newMovie]); // create newMovie and add to the existing
    // resetForm();
    history.push('/movies')
  };

return (

  <div className='add-movie-form'>

              <h1> Add Movie Form </h1>

              <TextField id="outlined-basic" label="Movie name" variant="outlined"
                value={name} onChange={(event) => setName(event.target.value)} />


              <TextField id="outlined-basic" label="Movie poster URL" variant="outlined"
                value={image} onChange={(event) => setImage(event.target.value)} />


              <TextField id="outlined-basic" label="Movie summary" variant="outlined"
                value={summary} onChange={(event) => setSummary(event.target.value)} />


              <TextField id="outlined-basic" label="Movie rating" variant="outlined"
                value={rating} onChange={(event) => setRating(event.target.value)} />

             <TextField id="outlined-basic" label="Movie trailer" variant="outlined"
                value={trailer} onChange={(event) => setTrailer(event.target.value)} /> 


              <Button onClick={addMovie} variant="contained">Add Movie</Button>

            </div>
)

}