import { useState } from 'react';
import './App.css'
import MovieList from './MovieList';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

/// till 1:30 on 6th react session is done
 function App() {  
    const [ data, setData] = useState ([

    {
      name: "The Avengers",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyNMKEWfouZ-LL6Un6IRmBbgHsno01MQsW0Q&s",
      rating:" ⭐ 8.4",
      summary:"S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time." 
    },
    {
      name: "Avatar: Fire and Ash",
      image:
        "https://upload.wikimedia.org/wikipedia/en/9/95/Avatar_Fire_and_Ash_poster.jpeg",
      rating:" ⭐ 7.4",
      summary:"The conflict on Pandora escalates as Jake and Neytiri's family encounter a new, aggressive Na'vi tribe." 
    },
    {
      name: "Jack Reacher",
      image:
        "https://m.media-amazon.com/images/I/91apNSEB2zL._AC_UF1000,1000_QL80_.jpg",
      rating:" ⭐ 7.0",
      summary:"When a former US Army sniper, James Barr, is accused of killing five people, Jack Reacher, a former Military Police officer, takes it upon himself to investigate the case." 
    },

    {
      name: "Gravity",
      image:
        "https://upload.wikimedia.org/wikipedia/en/f/f6/Gravity_Poster.jpg",
      rating:" ⭐ 7.7",
      summary:"Dr Ryan Stone, an engineer on her first time on a space mission, and Matt Kowalski, an astronaut on his final expedition, have to survive in space after they are hit by debris while spacewalking." 
    },
    {
      name: "The Expendables",
      image:
        "https://m.media-amazon.com/images/I/51y42RNdW7L._AC_UF1000,1000_QL80_.jpg",
      rating:" ⭐ 7.7",
      summary:"The Expendables is an American ensemble action thriller franchise conceived by David Callaham, spanning a film series, the first three movies were cowritten by Sylvester Stallone, and additional media" 
    } 
  ]);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");

  const resetForm = () =>{
    setName("");
    setImage("");
    setSummary("");
    setRating("");
  };


  const addMovie = ()=> {
              // copy of the movies and add new movies to it              
               const newMovie= {name,  image,  summary,  rating} ;
             
              setData([...data, newMovie]); // create newMovie and add to the existing

              resetForm();
            };
   

    return (
    <>
      <div className="App">

            {/* <input value= {name} onChange = { (event) => setName(event.target.value )} placeholder='Enter a movie name' />  */}
            {/* <input value= {image} onChange = { (event) => setImage(event.target.value )} placeholder='Enter a poster URL' />  */}
            {/* <input value= {summary} onChange = { (event) => setSummary(event.target.value )} placeholder='Enter a movie summary' /> <br/>
            <input value= {rating} onChange = { (event) => setRating(event.target.value )} placeholder='Enter a movie rating' /> <br/> <br/> */}
            {/* < button  onClick={addMovie}  > Add Movie</button> */}

            <TextField id="outlined-basic" label="Enter a movie name" variant="outlined"
            value= {name} onChange = { (event) => setName(event.target.value )} />            
            <br/>

            <TextField id="outlined-basic" label="Enter a poster URL" variant="outlined"
            value= {name} onChange = { (event) => setImage(event.target.value )} />              
            <br/>            

            <TextField id="outlined-basic" label="Enter a summary" variant="outlined"
            value= {summary} onChange = { (event) => setSummary(event.target.value )} />              
            <br/>

            <TextField id="outlined-basic" label="Enter a movie rating" variant="outlined"
            value= {rating} onChange = { (event) => setRating(event.target.value )} />              
            <br/>       

            <Button onClick={addMovie}  variant="contained">Add Movie</Button>
        
            <MovieList data={data} />    

            {/* <AddColor/>     */}
   
    </div>
    </>
  );

}


export default App;


// function AddColor (){

//   const [ color, setColor] = useState("");
//   const styles = { backgroundColor: color};

//   const [colors,setColors] = useState(["pink","orange", "crimson"]);

//   return(
//     <div>

//       <input

//       style={styles}
//       onChange = { (event)=> setColor(event.target.value)}      
//       placeholder ='Enter a color'/> {color}

//       <br></br>
//       <br></br>

//       <button onClick={() => setColors( [...colors,color])}> Add color</button>

//       { colors.map ((clr,index) => ( 

//         <ColorBox key ={index} clr= {clr} />
//       ))}
//     </div>
//   )
// }


// function ColorBox ({clr}){

//   const styles = {

//     backgroundColor:clr,
//     height:"30px",
//     width:"200px",
//     margin:"10px"
//   }

//   return(
//     <div style={styles} ></div>

//   );
// }