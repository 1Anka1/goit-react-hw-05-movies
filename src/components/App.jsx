import { Routes, Route } from 'react-router-dom';

//Components 
// import Navbar from './Navbar';
import SharedLayout from './SharedLayout/SharedLayout';

//Pages
import Home from './pages/Home';
import NotFoundPage from './pages/NoFoundPage/NoFoundPage';
import Movies from './pages/Movies';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
        <Route path='home' element={<Home/>} />
          <Route path='movies' element={<Movies />}>
            <Route path="/movies:movieId" element={<div>MovieDetails</div>} />
            <Route path="/movies/:movieId/cast" element={<div>Cast</div>} />
          <Route path="/movies/:movieId/reviews" element={<div>Reviews</div>}/>
        </Route>
        </Route>

          {/* <Route path="/movies:movieId" element={<MovieDetails />}/>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} /> */}
        {/* </Route> */}
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </>
  );
};
