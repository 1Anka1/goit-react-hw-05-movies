import { searchMovieById } from "components/service/api";
import { useParams } from "react-router-dom";


export const MovieDetails = () => {
    const { movieId } = useParams();
    const movie = searchMovieById(movieId);
console.log(movieId);
  return <div>Now showing product with id -{movie} {movieId}</div>;
};

export default MovieDetails;