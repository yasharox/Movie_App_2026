import { useState } from 'react';
import './App.css'
import MovieList from './movies/MovieList'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link, Switch, Route, Redirect, useParams, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { AddColor } from './color/AddColor';
import { InitialMovies } from './InitialMovies';
import MovieDetails from './movies/MovieDetails';
import { NotFound } from './others/NotFound';
import { Welcome } from './others/Welcome';
import { AddMovie } from './movies/AddMovie';
import { EditMovie } from './movies/EditMovie';



function App() {
  const [data, setData] = useState(InitialMovies);
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
          <li>
                 <Link to ="/movies/add-movie"> Add Movies </Link>                 
          </li>
          <li>
            <Link to="/color-game">Color Game</Link>
          </li>
        </ul>

        <Switch>

          <Route path="/films">
            <Redirect to="/movies"> </Redirect>
          </Route>
          <Route path="/movies/add-movie">
            <AddMovie data={data} setData = {setData} />
          </Route>
           <Route path="/movies/edit/:id">            
            <EditMovie data={data} setData={setData}/>
          </Route>

          <Route path="/movies/:id">
            < MovieDetails data={data} />
          </Route>
          
          <Route path="/movies">            
            <MovieList data={data} setData={setData}/>
          </Route>
          
          <Route path="/color-game">
            <AddColor />
          </Route>
          <Route exact path="/">
            <Welcome/>
          </Route>
          <Route path="**">
            <NotFound/>
          </Route>


        </Switch>

      </div>
    </>
  );

}


export default App;


//50   mins done 


// local crud  is done

// create - done Add Movie
// Read   - done MovieList, MovieDetails
// Update - EditMovie - combination of AddMovie & MovieDetails
// Delete - d one

// so far learned hooks
 // usestate
 // useHistory- route dom
 // useparams- route dom
 // useContext - to control prop drilling
