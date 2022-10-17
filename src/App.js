import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import MovieList from './pages/MovieList';
import { MovieProvider } from "./contexts/MovieProvider.js";
import MovieDetail from "./pages/MovieDetail";
import { FavoriteProvider } from "./contexts/FavouriteProvider";
import FavoriteList from "./pages/FavoriteList";
import SearchList from "./pages/SearchList";

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <FavoriteProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<MovieList />} />
              <Route path="movie/:id" element={<MovieDetail />} />
              <Route path='/favorites' element={<FavoriteList />} />
              <Route path='/searchList' element={<SearchList />} />
            </Routes>
          </Router>
        </FavoriteProvider>
      </MovieProvider>
    </div>
  );

}

export default App;

