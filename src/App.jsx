import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Favorites from './components/favorites'
import TopMatches from './components/top-matches'
import UploadPage from './components/upload-page'
import ProfilePage from './components/profile-page'
import "./components/styles/navbar.css"
import './App.css'

function App() {
  const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg fixed-top">
        
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <ul className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <li>
            <Link className="link" to="/">
              <b>Home</b>
            </Link>
          </li>
          <li>
            <Link className="link" to="/matches">
              <b>Top Matches</b>
            </Link>
          </li>
          <li>
            <Link className="link" to="/favorites">
              <b>Favorites</b>
            </Link>
          </li>
          <li>
            <Link className="link" to="/upload">
              <b>Upload</b>
            </Link>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <>
      <Router>
        <Navbar />
      
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/matches" element={<TopMatches />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;


// function App() {
  

//   return (
//     <>
//       < Favorites/>
//       < TopMatches />
//       < UploadPage />
//       < ProfilePage />

//     </>
//   )
// }

// export default App
