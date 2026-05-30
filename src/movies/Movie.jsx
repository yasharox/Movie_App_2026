import { useState } from "react";
import Counter from "./Counter";  
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
  
  function Movie ({ name, poster, summary, rating,trailer, index, deleteButton}) {

    const [ show, setShow] = useState(true);

    const styles = { display: show ? "block":"none"};

    const history = useHistory();

   return (

     <Card  className='movie-container'>
    <img 
    
    className='movie-poster'
    src={poster} alt='movie-image'/>

     <CardContent>
    <div className='movie-specs'>
    <h3 className='movie-name'> {name}

      <IconButton aria-label="expand" color="primary" onClick={() => setShow( !show)} >   
      { show ? <ExpandLessIcon /> :<ExpandMoreIcon/>   }
    </IconButton>
    <IconButton aria-label="expand" color="primary" onClick={() => history.push( `/movies/${index}`)} >   
     <InfoIcon/>   
    </IconButton>
      
       </h3>
    <p className='movie-rating'> {rating}</p>

    </div>
    
     {/*  conditional rendering  */}
    {/* {show ?<p style = { styles} className='movie-summary'> {summary}</p>:""} */}

    {/*  conditional styling  */}
    <p style = { styles} className='movie-summary'> {summary}</p>

      <CardActions>
            <Counter/>  
            {deleteButton}          
      </CardActions>
      
    </CardContent>
    </Card > 
   )
}


export default Movie;