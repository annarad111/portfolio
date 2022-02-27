import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/main.css'

function Home() {
    return (
      <div className='Home'>

        <div className='mainpage'>
        <h1>Hello, my name is Ana.</h1>
        <div className='subtitle'>
        <Link className="enter" to="/about" activeStyle>
            ENTER
        </Link>
        </div>
        </div>

      </div>
    );
  }
  
  export default Home;