
import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Header from './components/header/header.js';
import Home from './pages/home/home.js';
import MovieList from './components/movieList/movieList.js';
import Movie from './pages/movieDetail/movie.js';

function App() {
  return (
    <div className="App">
     <Router>
      <Header/>
      <Routes>
        <Route index element ={<Home />}></Route>
        <Route path="movie/:id" element={<Movie />}></Route> 
        <Route path="movies/:type" element={<MovieList/>}></Route> //movie type ke according ye route list laake de dega movies ki
        <Route path="/" element={<h1>Error Page</h1>}></Route>  //in 3 ke alawa koi route aaya to error page
      </Routes>
     </Router>
    </div>
  );
}

export default App;
