import { Routes, Route } from 'react-router-dom';

//Components 
import SharedLayout from './SharedLayout/SharedLayout';

//Pages
import Home from '../pages/Home';
import NotFoundPage from '../pages/NoFoundPage';
import MovieDetails from './MovieDetails/';
import MoviesPage from 'pages/MoviesPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
        <Route path='/' element={<Home/>} />
          <Route path='movies' element={<MoviesPage/>}>
            <Route path="/movies:movieId" element={<MovieDetails/>} />
            <Route path="/movies/:movieId/cast" element={<div>Cast</div>} />
          <Route path="/movies/:movieId/reviews" element={<div>Reviews</div>}/>
        </Route>
        </Route>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </>
  );
};
