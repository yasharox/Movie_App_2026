import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';


 function Counter () {

  const[ like, setLike] = useState(0);  
  const[ dislike, setDisLike] = useState(0); 

  const incrementLike = () =>setLike(like +1);
  const incrementDisLike = () =>setDisLike(dislike +1);

  return (

    <div className='counter'>

       
        
        <IconButton aria-label="like"  onClick={ incrementLike} color="primary" >
            <Badge badgeContent={like} color="primary">
                👍🏻 
            </Badge>          
        </IconButton>
  

       
       <IconButton aria-label="Dislike"  onClick={ incrementDisLike} color="primary" > 
        <Badge badgeContent={dislike} color="error">  👎🏻 </Badge>
        </IconButton>
       


    </div>
  )  
}

export default Counter;


