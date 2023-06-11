import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import NavbarMain from './Components/Navbar/nav';
import Home from './Components/Home/home';
import Headers from './Components/Header/header';
import Gallery from './Components/Gallery/Gallery';

function App() {
  return (
    <Router>
    <div className="App">
       <NavbarMain/>
       <Routes>
      <Route path="/" element={<Headers/>} />
      <Route path="/gallery" element={<Gallery/>} />
      
      </Routes>


    </div>
    </Router>
  );
}

export default App;
