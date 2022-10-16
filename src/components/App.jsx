import { Routes, Route } from 'react-router-dom';

//Components 
import Navbar from './Navbar';

//Pages
import Home from './pages/Home';
import Movies from './pages/Movies';

export const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  );
};
