import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/main";
import React from 'react';
import './App.css';
import Projects from "./pages/projects";

function App() {
  return (
    <div className="App ">

<Router>
        <Routes> 
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
