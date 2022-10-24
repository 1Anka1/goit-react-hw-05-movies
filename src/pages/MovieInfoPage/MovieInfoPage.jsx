import { searchMovieById } from "components/Api/api"
import Loader  from "components/shared/Loader/Loader"
import { useEffect, useState } from "react"
import { useParams, useNavigate, Outlet, NavLink, useLocation } from "react-router-dom"
import css from './MovieInfoPage.module.scss'

export default function MovieInfoPage() {
    const [movie, setMovie] = useState('')
    const [loading, setLoading] = useState(false)
    const[error, setError] = useState(null)

    const {id} = useParams()
    const navigate = useNavigate()

    const getClassName = ({ isActive }) => {
        return isActive ? `${css.link} ${css.active}` : `${css.link}`;
      };

    const location = useLocation()
    const from = location.state?.from || "/"
    const goBack = () => navigate(from)


    const castLink = location.pathname.includes("cast") ? `/movies/${id}` : `/movies/${id}/cast`
    const reviewsLink = location.pathname.includes("reviews") ? `/movies/${id}` : `/movies/${id}/reviews`

    const imagePath = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://w7.pngwing.com/pngs/772/172/png-transparent-film-cinema-television-android.png';
    const releaseDate = movie.release_date ? movie.release_date?.split('-')[0] : 'No data';

    useEffect(() => {
        const fetchMovie = async ()=> {          
            try{
                setLoading(true)
                const data = await searchMovieById(id);
                setMovie(data)

            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }         
        }

        fetchMovie()

    },[id])

 const { name, title, vote_average, overview} = movie;
    return (
      
        
    <section className={css.movieSection}>
        <button type="button" onClick={goBack} className={css.goBackBtn}>Go back</button>
      {loading && <Loader />}
      {error && (
                <div className={css.movieImgThumb}>
                    <h4>The resource you requested could not be found.</h4>
                    <img src={'https://www.ra.bm/wp-content/themes/consultix/images/no-image-found-360x250.png'} alt='' className={css.movieImg}/>
                </div>
                )}

      {movie && (
        <>
            <div className={css.movieWrapper}>
                <div className={css.movieImgThumb}>
                    <img src={imagePath} alt={name} className={css.movieImg}/>
                </div>

                <div className={css.movieInfo}>
                    <h2 className={css.movieTitle}>{title || name} ({releaseDate})</h2>
                    <ul className={css.movieInfoList}>
                        <li className={css.movieInfoItem}>User score: <span className={css.movieInfoDetail}>{Math.round(vote_average * 10)}%</span></li>
                    </ul>  
                    <div className={css.movieInfoWrapper}>
                        <h4>Overview</h4>
                        <p className={css.movieInfoAbout}>{overview}</p>
                    </div>   
                    
                    
                    <div className={css.movieInfoWrapper}>
                        <h4>Genres</h4>
                        <p className={css.movieInfoAbout}>
                            {movie.genres.map(({name, id}) => 
                                (<span  className={css.movieGenre} key = {id}>{name}</span>))}
                        </p>
                    </div>
                
                </div>
            </div>

            <div className={css.movieAdditionalWrapper}>
                <h4>Additional information</h4>
                <ul className={css.movieAdditionalInfoList}>
                    <li><NavLink state = {{from}} to={castLink} className={getClassName}>Cast</NavLink></li> 
                    <li><NavLink state = {{from}} to={reviewsLink} className={getClassName}>Reviews</NavLink></li> 
                </ul>
                <Outlet/>
            </div>
        </>)}
    </section>
  )
}
