import { Routes, Route } from 'react-router-dom';

//Components 
import Navbar from './Navbar';

//Pages
import Home from './pages/Home';
import Movies from './pages/Movies';
import NotFoundPage from './pages/NoFoundPage/NoFoundPage';

export const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />}/>
          {/* <Route path="/movies:movieId" element={<MovieDetails />}/>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} /> */}
        {/* </Route> */}

        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </>
  );
};
