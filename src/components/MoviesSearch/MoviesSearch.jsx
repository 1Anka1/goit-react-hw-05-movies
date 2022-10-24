import { searchMovies } from 'components/Api/api'
import MoviesList from 'components/Movies/MoviesList/MoviesList'
import  Loader  from 'components/shared/Loader/Loader'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import MoviesSearchForm from './MoviesSearchForm'

export default function MoviesSearch() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [totalResults, setTotalResults] = useState(true)

    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get("query")

    const onSearch = (search) => {
      setSearchParams({query: search})
      setMovies ([])
  }

      useEffect(() =>{

        const fetchMovies = async ()=> {          
            try{
              setLoading(true)
                const data = await searchMovies(query);
                setMovies((prevMovies) => [...prevMovies, ...data.results])
                setTotalResults(!data.total_results ? false : true)

            } catch (error) {
                setError(error)

            } finally {
              setLoading(false)
            }          
        }

        if (query) fetchMovies()

    }, [query])

  return (
    <div>
        <MoviesSearchForm onSubmit = {onSearch}/>  
        {totalResults ? <MoviesList items={movies} /> : <p>Try again.</p>} 
        {loading && <Loader />}
        {error && <p>Movies not found</p>}
    </div> 
  )
}