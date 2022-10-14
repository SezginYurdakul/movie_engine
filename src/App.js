
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
//import Movies from './pages/MovieList/Movies';
import MovieList from './components/MovieList';
import { MovieProvider } from "./components/MovieProvider.js";

//import Main from './components/Main';
function App() {
  return (
    <div className="App">
      <MovieProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Navbar />} />
          </Routes>
        </Router>
        <MovieList />
      </MovieProvider>
    </div>
  );

}

export default App;

