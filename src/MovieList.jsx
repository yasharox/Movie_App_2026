import Movie from './Movie.jsx';
import data from './Data.js';

function MovieList ({data}) {
return (

    <section className='movie-list'>

      {data.map (({name, image, rating, summary}, index)=>( 
        <Movie  name = {name} poster = {image} rating={rating} summary={summary} index= {index}/>) )}

     </section>
) 
}

export default MovieList;