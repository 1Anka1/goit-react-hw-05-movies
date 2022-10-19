import { useState, useEffect } from "react"
import { searchTrendDayMovie } from 'components/service/api.jsx'

//Component
import MoviesList from './MovieList/MoviesList'
import Loader from 'components/Loader/Loader.jsx'



export default function Movies() {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    useEffect(() =>{

        const fetchMovies = async ()=> {          
            try{
              setLoading(true)
                const data = await searchTrendDayMovie();
                setMovies((prevMovies) => [...prevMovies, ...data.results])

            } catch (error) {
                setError(error)

            } finally {
              setLoading(false)
            }          
        }

        fetchMovies()

    }, [])

    return (
       <div>
      <h2>Trending: </h2>
      {Boolean(movies.length) && <MoviesList items={movies} />}
      {loading && <Loader />}
      {error && <p>Movies load fail</p>}
    </div>)
};
