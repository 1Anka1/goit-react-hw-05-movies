import { useState, useEffect } from 'react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import { searchMovieById } from 'components/service/api.jsx';
import Loader from 'components/Loader/Loader';

export const MovieDetails = () => {

  const [movie, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  const imagePath = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://w7.pngwing.com/pngs/772/172/png-transparent-film-cinema-television-android.png';

  useEffect(() => {

    const fetchMovie = async () => {
      try {
        setLoading(true);
        const data = await searchMovieById(movieId);
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

  return (
    <section>
      <button type="button">Go back</button>
      {loading && <Loader />}
      {error && (
        <div>
          <p>The resource you requested could not be found.</p>
        </div>
      )}
      {movie && (
        <div>
          <div>
            <img src={imagePath} alt={movie.title || movie.name} />
          </div>
          <div>
            <h1>{movie.original_title}</h1>
            <ul>
              <li>Release date : {movie.release_date}</li>
              <li>User score: {Math.round(movie.vote_average * 10)}% </li>
              <li>Language: {movie.original_language}</li>
            </ul>
          </div>
          <div>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
          </div>
          <div>
            <h2>Genres</h2>
            {/* {movie.genres.map(({ name, id }) => (
              <span key={id}> {name} </span>
            ))} */}
          </div>
        </div>
      )}
          <div>
                <h2>Additional information</h2>
                <ul>
                    <li><NavLink>Cast</NavLink></li> 
                    <li><NavLink>Reviews</NavLink></li> 
                </ul>
                <Outlet/>
            </div>
    </section>
  );
};

export default MovieDetails;
