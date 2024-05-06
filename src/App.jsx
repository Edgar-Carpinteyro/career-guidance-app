import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Mentor from "./components/mentor";
import UploadPage from "./components/upload-page";
import "./components/styles/navbar.css"
import './App.css'

function App() {
  const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg fixed-bottom">
               
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
              <img src="/profile-images/user-icon.svg" alt="" />
            </Link>
          </li>
          <li>
            <Link className="link" to="/upload">
              <img src="/profile-images/cloud-icon.svg" alt="" />
            </Link>
          </li>
          <li>
            <Link className="link" to="/mentor">
              <img src="/profile-images/mentor-icon.svg" alt="" />
            </Link>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/mentor" element={<Mentor />} />
        </Routes>
        <Navbar />
      </Router>
    </>
  );
}

export default App;

