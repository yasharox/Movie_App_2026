import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import data from '../Data';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';

export function EditMovie ({data, setData }){

  const {id} = useParams();
  const movie = data[id];
  console.log(data, movie);

  const [name, setName] = useState(movie.name);
  const [image, setImage] = useState(movie.image);
  const [summary, setSummary] = useState(movie.summary);
  const [rating, setRating] = useState(movie.rating);
  const [trailer, setTrailer] = useState(movie.trailer);
  const history = useHistory();




  const editMovie = () => {         

    const updateMovie = { name, image, summary, rating, trailer };
      // create copy of the movies and add replace the edited movies to it        
    
      const copyMovies = [...data];
      copyMovies[id] = updateMovie;
      setData(copyMovies); // create newMovie and add to the existing
 
    history.push('/movies')
  };

return (

  <div className='add-movie-form'>

              <h1> Edit Movie Form </h1>

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


              <Button onClick={editMovie} color='success' variant="contained">SAVE</Button>

            </div>
)

}