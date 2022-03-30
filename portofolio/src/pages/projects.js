import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/projects.css';
import askmate3 from '../images/askmate3.png';
import parallax from '../images/parallax.png';
import memories from '../images/memories.png';
import astrid from '../images/astrid.png';
import andreea from '../images/andreeanails.png';

function Projects() {
    return (
      <div className="projectheader">
        <h1>Projects</h1>
        <div className="projectspage">
          <div className="projectimg">

          <div class="container">
              <img src={astrid} alt="Askmate3" class="image" />
              <div class="middle">
                <div class="textinside">
                  <a href="http://www.nails-by-astrid.com/">Nails by Astrid</a>
                </div>
              </div>
            </div>
            <div>
              <a href="https://github.com/annarad111/astridnails">
                <img
                  src="https://img.icons8.com/clouds/100/ffffff/github.png"
                  className="githublogo"
                />
                <h3 className="githubtext">
                  Github Repository - Nails by Astrid
                </h3>
              </a>
            </div>


            <div class="container">
              <img src={andreea} alt="Askmate3" class="image" />
              <div class="middle">
                <div class="textinside">
                  <a href="http://www.andreea-nails.com/">Andreea Nails</a>
                </div>
              </div>
            </div>
            <div>
              <a href="https://github.com/annarad111/andreeanails">
                <img
                  src="https://img.icons8.com/clouds/100/ffffff/github.png"
                  className="githublogo"
                />
                <h3 className="githubtext">
                  Github Repository - Andreea Nails
                </h3>
              </a>
            </div>


            <div class="container">
              <img src={askmate3} alt="Askmate3" class="image" />
              <div class="middle">
                <div class="textinside">
                  <a href="https://alexana-askmate.herokuapp.com/">Askmate 3</a>
                </div>
              </div>
            </div>
            <div>
              <a href="https://github.com/CodecoolGlobal/ask-mate-3-python-annarad111">
                <img
                  src="https://img.icons8.com/clouds/100/ffffff/github.png"
                  className="githublogo"
                />
                <h3 className="githubtext">Github Repository - Askmate</h3>
              </a>
            </div>

            <div class="container">
              <img src={parallax} alt="Askmate3" class="image" />
              <div class="middle">
                <div class="textinside">
                  <a href="https://festive-kilby-f2b9dc.netlify.app/">
                    Parallax
                  </a>
                </div>
              </div>
            </div>
            <div>
              <a href="https://github.com/annarad111/parallax">
                <img
                  src="https://img.icons8.com/clouds/100/ffffff/github.png"
                  className="githublogo"
                />
                <h3 className="githubtext">Github Repository - Parallax</h3>
              </a>
            </div>

            <div class="container">
              <img src={memories} alt="Askmate3" class="image" />
              <div class="middle">
                <div class="textinside">
                  <a href="https://dreamy-fermat-6bccb8.netlify.app">
                    Memories
                  </a>
                </div>
              </div>
            </div>
            <div>
              <a href="https://github.com/annarad111/Memories">
                <img
                  src="https://img.icons8.com/clouds/100/ffffff/github.png"
                  className="githublogo"
                />
                <h3 className="githubtext">Github Repository - Memories</h3>
              </a>
            </div>

            
          </div>
        </div>
      </div>
    );
  }
  
  export default Projects;