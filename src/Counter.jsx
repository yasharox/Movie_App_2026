import { useState } from "react";
import IconButton from '@mui/material/IconButton';

 function Counter () {

  const[ like, setLike] = useState(0);  
  const[ dislike, setDisLike] = useState(0); 

  const incrementLike = () =>setLike(like +1);
  const incrementDisLike = () =>setDisLike(dislike +1);

  return (

    <div className='counter'>

      {/* <button onClick={ incrementLike}> 👍🏻 <span> {like}</span></button> */}
       <IconButton aria-label="like" size="small" onClick={ incrementLike}>    👍🏻{like}   </IconButton>
       <IconButton aria-label="like" size="small" onClick={ incrementDisLike}> 👎🏻{dislike}   </IconButton>
      {/* <button onClick={ incrementDisLike}> 👎🏻   <span> {dislike}</span></button> */}
      
    </div>
  )  
}

export default Counter;


