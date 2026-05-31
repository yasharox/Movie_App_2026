import Movie from './Movie.jsx';
import data from '../Data.js';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min.js';

function MovieList ({data, setData}) {

  const history = useHistory();

  const removeMovie = (index)=>{ // remove movie logic with filter is simple
     const removeMovieIndex = index;          
     const remainingMovies = data.filter( (mv, idx) => idx != removeMovieIndex);

     console.log( data, remainingMovies, index);
     // and update it
     setData(remainingMovies);
  };
return (

    <section className='movie-list'>

      {data.map (({name, image, rating, summary}, index)=>( 
        <Movie  name = {name} poster = {image} rating={rating} summary={summary} index= {index}
        

         editButton = {  
        <IconButton 
         style = {{marginLeft: "auto"}}
        aria-label="edit"   color='success'  size="large" 
          onClick={() => {history.push('/movies/edit/' + index)}}    // edit  movie logic with  is simple
        >
        <EditIcon />
        
       </IconButton>     
      
      }



        deleteButton = {  

        <IconButton       
        
        aria-label="delete"   color='error'  size="large"
          onClick={() => { removeMovie(index) }}    // remove movie logic with filter is simple
        >
        <DeleteIcon />
        
       </IconButton>     
      
      }

       

      

       
        />) )}

     </section>
) 
}

export default MovieList;