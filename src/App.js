import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Homepage from './components/Homepage/Homepage';
import ContactUS from './components/Contact/Contact';
import AboutUS from './components/About/About';
import Login from './components/Login/login';
import './App.css'; // Make sure this is imported!

const ProtectedRoutes = ({ isAuth, children }) => {
  return isAuth ? children : <Navigate to="/login" />;
};

function App() {
  const isAuth = true;

  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
          <Link to="/about">About Us</Link>
        </header>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactUS />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/about"
            element={
              <ProtectedRoutes isAuth={isAuth}>
                <AboutUS />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
