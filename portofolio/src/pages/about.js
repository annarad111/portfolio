import './about.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="About ">
        <div className='all'>
      <p className="text">
      <span className="text-7xl text-fuchsia-500">&lt;</span>
       <span className="text-5xl text-slate-700">PORTFOLIO</span>
       <span className="text-7xl text-fuchsia-500">&gt;</span>
      </p>

      <div className="top">
      <p className="name">
      <span className="text-4xl text-violet-100">Radulescu Ana-Maria</span>
      </p>
      <p className="position">
      <span className="text-2xl text-violet-100"> Fullstack Developer</span>
      </p>
      

      <p className="text">
      <span className="text-7xl text-fuchsia-500">.</span>
       <span className="text-5xl text-slate-700">about me</span>
      </p>


      <p className="position">
      <span className="text-2xl text-violet-100">Hello ! My name is Radulescu Ana-Maria,I am a hard-working,creative person with good understanding of HTML, JavaScript, CSS, React, Python, Java, ASP.NET as well as ability to communicate effectively in a team setting, and possessing a strong willingness to learn more about anything in this field.</span>
      </p>

      <p className="text">
      <span className="text-7xl text-fuchsia-500">.</span>
       <span className="text-5xl text-slate-700">education</span>
      </p>
      <p className="education">
      <span className="text-2xl text-violet-100">Programming School Codecool-Fullstack Course </span>
      </p>
      <p className="position">
      <span className="text-2xl text-violet-100">1 Year Course hands-on experience </span>
      </p>
      <p className="education">
      <span className="text-2xl text-violet-100">UARTE - Bucharest National University of Arts </span>
      </p>
      <p className="position">
      <span className="text-2xl text-violet-100">Visual Arts - 4 Years</span>
      </p>
      <p className="education">
      <span className="text-2xl text-violet-100"> Entrepreneurship </span>
      </p>
      <p className="position">
      <span className="text-2xl text-violet-100">I had my own business in the Arts Field for 4 Years</span>
      </p>
      </div>
      <div className='button'>
      <Link className="glow-on-hover" to="/projects" activeStyle>
            Want to see my projects?
        </Link>
        </div>


      <p className="text">
      <span className="text-7xl text-fuchsia-500">&lt;</span>
       <span className="text-5xl text-slate-700">/PORTFOLIO</span>
       <span className="text-7xl text-fuchsia-500">&gt;</span>
      </p>
      

        </div>
      


    </div>
  );
}

export default About;
