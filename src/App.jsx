import { useState } from 'react';
import './App.css'
import MovieList from './MovieList';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link, Switch, Route, Redirect, useParams, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { AddColor } from './AddColor';
import { InitialMovies } from './InitialMovies';
import MovieDetails from './MovieDetails';



function App() {
  const [data, setData] = useState(InitialMovies);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");

  const resetForm = () => {
    setName("");
    setImage("");
    setSummary("");
    setRating("");
  };


  const addMovie = () => {
    // copy of the movies and add new movies to it              
    const newMovie = { name, image, summary, rating };
    setData([...data, newMovie]); // create newMovie and add to the existing
    resetForm();
  };




  return (
    <>
      <div className="App">

        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          {/* <li>
                 <Link to ="/add-movie"> Add Movies </Link>                 
              </li> */}
          <li>
            <Link to="/color-game">Color Game</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/movies/:id">
            < MovieDetails data={data} />
          </Route>

          <Route path="/movies">
            <div className='add-movie-form'>

              <h1> Add Movie Form </h1>

              <TextField id="outlined-basic" label="Enter a movie name" variant="outlined"
                value={name} onChange={(event) => setName(event.target.value)} />


              <TextField id="outlined-basic" label="Enter a poster URL" variant="outlined"
                value={image} onChange={(event) => setImage(event.target.value)} />


              <TextField id="outlined-basic" label="Enter a summary" variant="outlined"
                value={summary} onChange={(event) => setSummary(event.target.value)} />


              <TextField id="outlined-basic" label="Enter a movie rating" variant="outlined"
                value={rating} onChange={(event) => setRating(event.target.value)} />


              <Button onClick={addMovie} variant="contained">Add Movie</Button>

            </div>

            <MovieList data={data} />

          </Route>
          <Route path="/films">
            <Redirect to="/movies"> </Redirect>
          </Route>
          <Route path="/color-game">
            <AddColor />
          </Route>
          <Route exact path="/">
            <h1>Welcome to  Movie App</h1>
          </Route>
          <Route path="**">
            Not Found
          </Route>


        </Switch>



      </div>
    </>
  );

}


export default App;




  // 13th nov 2021 50 mins done
 // revisit 45 for back button 



// two hooks till now used

// use history - to change url from the react-router-dom
// use param   - to extract the value

// usestate - to continious update

// useHistory = to go to back to previous page - react router dom
