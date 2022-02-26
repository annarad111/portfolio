import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/main.css'

function Home() {
    return (
      <div className='Home'>

        <div className='mainpage'>
        <h1>Hello, my name is Ana.</h1>
        <Link className="subtitle" to="/about" activeStyle>
            Welcome to my portfolio!
        </Link>
        </div>
      </div>
    );
  }
  
  export default Home;