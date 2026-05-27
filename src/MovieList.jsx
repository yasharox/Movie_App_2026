import Movie from './Movie.jsx';
import data from './Data.js';

function MovieList ({data}) {
return (

    <section className='movie-list'>

      {data.map (({name, image, rating, summary})=>( 
        <Movie  name = {name} poster = {image} rating={rating} summary={summary} />) )}

     </section>
) 
}

export default MovieList;