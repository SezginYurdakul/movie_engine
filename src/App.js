
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import MovieList from './components/MovieList';
import { MovieProvider } from "./components/MovieProvider.js";
import MovieDetail from "./components/MovieDetail";
//import Main from './components/Main';
function App() {
  return (
    <div className="App">
      <MovieProvider>

        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="movie/:id" element={<MovieDetail />} />
          </Routes>
        </Router>
      </MovieProvider>
    </div>
  );

}

export default App;

