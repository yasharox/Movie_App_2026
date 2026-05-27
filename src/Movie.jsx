import { useState } from "react";
import Counter from "./Counter";  
import Button from '@mui/material/Button';
  
  function Movie ({ name, poster, summary, rating }) {

    const [ show, setShow] = useState(true);

    const styles = { display: show ? "block":"none"};

   return (

     <div className='movie-container'>
    <img 
    
    className='movie-poster'
    src={poster} alt='movie-image'/>

    <div className='movie-specs'>
    <h3 className='movie-name'> {name} </h3>
    <p className='movie-rating'> {rating}</p>

    </div>
    
    {/*  conditional styling  */}
    {/* < button  >   </button> */}

    <Button variant="text" onClick={() => setShow( !show)} >{ show ? "Hide" : "Show" } Description </Button>

     {/*  conditional rendering  */}
    {/* {show ?<p style = { styles} className='movie-summary'> {summary}</p>:""} */}

    {/*  conditional styling  */}
    <p style = { styles} className='movie-summary'> {summary}</p>

    <Counter/>
    
    </div>
   )
}


export default Movie;