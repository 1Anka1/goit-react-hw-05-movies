import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { searchMovieById } from 'components/service/api.jsx'

export const MovieDetails = () => {
  const { movieId } = useParams();
  
  const [movies, setMovies] = useState([])
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(null)
  
  useEffect(() => {
  searchMovieById(movieId).then(setMovies)
}, [movieId])
  
  console.log(movieId);
  return <div>MovieDetails {movieId}</div>;
};

export default MovieDetails;