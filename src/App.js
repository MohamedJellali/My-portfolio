import React, { useState } from "react";
import Particles from "react-particles-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGooglePlusG,faFacebookF,faLinkedinIn,faGithub, faReact, faNode,  faCss3,  faHtml5,  faJs} from "@fortawesome/free-brands-svg-icons";
import {faDownload,faChevronCircleDown,faCode, faBriefcase,faGraduationCap,faUniversity,faAngleDoubleUp,faInfoCircle,faPlayCircle,faHeart} from "@fortawesome/free-solid-svg-icons";
import { VerticalTimeline,VerticalTimelineElement
} from "react-vertical-timeline-component";
import ReactCardFlip from "react-card-flip";
import "react-vertical-timeline-component/style.min.css";
import "./App.css";
import resume from './resume/Mohamed_JELLALI_CV.pdf'
import mongo from './images/mongodb.svg'
import express from './images/express.svg'
import wevent from './images/wevent.PNG'
import marvel from './images/marvel.PNG'
import portfolio from './images/portfolio.PNG'
import movieapp from './images/movieapp.PNG'
import angapp from './images/angapp.PNG'
import angularblog from './images/Angularblog.PNG'

let particleconfig = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "polygon",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

function App() {
  const [view1, toggle1] = useState(0);
  const [view2, toggle2] = useState(0);
  const [view3, toggle3] = useState(0);
  const [view4, toggle4] = useState(0);
  const [view5, toggle5] = useState(0);
  const [view6, toggle6] = useState(0);

  return (
    <div className="App">
      {/*-------------Particle based Display-----------------*/}
      <div id="particle-container">
        <Particles className="particles" params={particleconfig} />

        <div className="header">
          <h2>
            MOHAMED JELLALI
          </h2>
          <h3>Web Developer Engineer</h3>
          <div className="icon-container">
            <a
              title="Google"
              className="fa"
              href="mailto:mohamedjjellali@gmail.com"
              target="new"
            >
              <FontAwesomeIcon icon={faGooglePlusG} />
            </a>
            <a
              title="Linkedin"
              className="fa"
              href="https://www.linkedin.com/in/mohamedjellali"
              target="new"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              title="Facebook"
              className="fa"
              href="https://www.facebook.com/mohamed.jellali.01"
              target="new"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              title="Github"
              className="fa2"
              href="https://github.com/MohamedJellali"
              target="new"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className="pagelinks">
            <a className="pagenav" href="#aboutMe">
              About Me
            </a>
            <a className="pagenav" href="#projects">
              Projects
            </a>
            <a className="pagenav" href={resume} download='Mohamed Jellali CV.pdf'>
              Resume <FontAwesomeIcon icon={faDownload} />
            </a>
          </div>
        </div>
        <a href="#aboutMe" className="down">
          <FontAwesomeIcon icon={faChevronCircleDown} />
        </a>
      </div>
      {/*------------Particle body Ends Here---------------------------*/}

      {/*-------------About Me------------*/}

      <div id="aboutMe" className="about ">
        <h1>About Me</h1>
        <p>
          I am a JavaScript Lover and a Full Stack Web Developer. <br/>
          Actually I Specialize in Javascript MERN Stack :
           <b>React Js / Redux</b> [for UI] , <b>Node Js/Express Js</b> [for Backend] and <b>MongoDB/Mongoose</b> 
           [for DBMS] ; However, I have developed some applications with <b>Angular</b> and <b>TypeScript</b>. 
          <br/>I am very passionate about this world, and strive to better myself as a developer, 
          and the development community as a whole.
        </p>
        <div className="tech">
          <div className="tools">
            <h2>U.I.</h2>
            <div className="tools-icon">
              <FontAwesomeIcon icon={faHtml5} />
              <FontAwesomeIcon icon={faCss3} />
              <FontAwesomeIcon icon={faJs} />
            </div>
          </div>

          <div className="web-technologies">
            <h2>MERN Stack</h2>
            <div className="web-icons">
              <FontAwesomeIcon icon={faReact} />
              <FontAwesomeIcon icon={faNode} />
              <img
                src={mongo}
                alt="mongodb Icon"
                width="120px"
                height="120px"
              />
              <img
                src={express}
                alt="expressJs Icon"
                width="180px"
                height="150px"
              />
            </div>
          </div>
        </div>
      </div>

      {/*------------Work Timeline-------- */}

      <div className="timeline">
        <h1>Timeline</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=" April 2021 - present"
            iconStyle={{ background: "#000000", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faReact} />}
          >
            <h1>Full Stack Javascript Instructor</h1>
            <h1>April 2021 - present</h1>
            <p>GoMyCode</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=" March 2021"
            iconStyle={{ background: "#000000", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faReact} />}
          >
            <h1>Full Stack Js Web Developer-Training</h1>
            <h1>Aug 2020 - March 2021</h1>
            <p>GoMyCode</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=" 2017 - 2020"
            iconStyle={{ background: "#000000", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h1>Customer and Production Quality Engineer</h1>
            <h1>2017-2020</h1>
            <p>VALEO</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Nov 2015"
            iconStyle={{ background: "#000000", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h1>National Engineer Diploma</h1>
            <h1> 2012-2015 </h1>
            <p>National Engineering School of Monastir « ENIM »</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2012"
            iconStyle={{ background: "#000000", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faUniversity} />}
          >
            <h1>Preparatory Engineering Cycle</h1>
            <h1> 2010-2012 </h1>
            <p>Preparatory Engineering Institute of El Manar</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{ background: "#000000", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faAngleDoubleUp} />}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      {/*------------Projects---------------*/}
      <div id="projects" className="projects">
        <h1>Projects</h1>
        <h2 style={{ maxWidth: "90%" }}>
          Here is a some of my projects, Hope you like it.
          <br />
          Still there's more in my github page{" "}
        </h2>
        <div className="project-content">
          <div
            className="project-item"
            onMouseEnter={() => {
              toggle1(1);
            }}
            onMouseLeave={() => {
              toggle1(0);
            }}
          >
            <h1>WeEvent.com</h1>
            <ReactCardFlip isFlipped={view1} flipDirection="horizontal">
              <img
                key="front"
                src={wevent}
                alt="WeEvent web Site"
              />
              <div className="reverse" key="back">
                <h1>
                  A  full Stack website developed to help 
                  people to create and participate on events
                </h1>
                <h2>The project Developed with the MERN Stack and JWT authentication</h2>
                <h3>
                  Frontend : React Js, Redux, Bootstrap, Material UI,..<br/>
                  Backend : Node Js, Express Js, JWT, REST API <br/>
                  DB : MongoDB, Mongoose
                </h3>
                <p>
                  This website is deployed on Heroku, you could Launch it <br />{" "}
                  
                </p>
              </div>
            </ReactCardFlip>

            <div className="options">
              <div onClick={() => toggle1(!view1)}>
                
                  More <FontAwesomeIcon icon={faInfoCircle} />
               
              </div>
              <div>
                <a href="https://myprojectweevent.herokuapp.com/" target='new'>
                  Launch <FontAwesomeIcon icon={faPlayCircle} />
                </a>
              </div>
              <div>
                <a href="https://github.com/MohamedJellali/MERN-Project-WeEvent" target='new'>
                  Source
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-item"
            onMouseEnter={() => {
              toggle2(1);
            }}
            onMouseLeave={() => {
              toggle2(0);
            }}
          >
            <h1>Marvel API Application</h1>
            <ReactCardFlip isFlipped={view2} flipDirection="horizontal">
              <img
                key="front"
                src={marvel}
                alt="marvel app"
              />
              <div className="reverse" key="back">
                <h1>
                  A Full Stack web application developed with Marvel API
                </h1>
                <h2>The project Developed with the MERN Stack and Marvel API</h2>
                <h3>
                  Frontend : React Js, Reactstrap,..<br/>
                  Backend : Node Js, Express Js, REST API, Marvel API <br/>
                  DB : MongoDB, Mongoose
                  Docker
                </h3>
                <p>
                  This project consist to store the Marvel API data in a database and
                   display the characters of Marvel in frontend; the pages are paginated<br />{" "}
                </p>
              </div>
            </ReactCardFlip>

            <div className="options">
              <div onClick={() => toggle2(!view2)}>
                
                  More <FontAwesomeIcon icon={faInfoCircle} />
                
              </div>
              <div>
                <a href="https://github.com/MohamedJellali/Marvel-App" target='new'>
                  Source
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-item"
            onMouseEnter={() => {
              toggle3(1);
            }}
            onMouseLeave={() => {
              toggle3(0);
            }}
          >
            <h1>My Portfolio Website</h1>
            <ReactCardFlip isFlipped={view3} flipDirection="horizontal">
              <img
                key="front"
                src={portfolio}
                alt="My portfolio website"
              />
              <div className="reverse" key="back">
                <h1>
                  A React Web Application {" "}
                </h1>
                <h2>The project Developed with React Js for create my portfolio and apply some css tricks like : <br/>
                react-vertical-timeline-component, react particles js,.
                </h2>
                <h3>
                  Frontend : React Js, Reactstrap, react particles js, react,..<br/>
                </h3>
                <p>
                  My Portfolio website<br />{" "}
                </p>
              </div>
            </ReactCardFlip>

            <div className="options">
              <div onClick={() => toggle3(!view3)}>
                
                  More <FontAwesomeIcon icon={faInfoCircle} />
                
              </div>
              <div>
                <a href="https://mohamed-jellali.herokuapp.com/">
                  Launch <FontAwesomeIcon icon={faPlayCircle} />
                </a>
              </div>
              <div>
                <a href="https://github.com/MohamedJellali/My-portfolio">
                  Source
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-item"
            onMouseEnter={() => {
              toggle4(1);
            }}
            onMouseLeave={() => {
              toggle4(0);
            }}
          >
            <h1>Movie Store Web Application</h1>
            <ReactCardFlip isFlipped={view4} flipDirection="horizontal">
              <img
                key="front"
                src={movieapp}
                alt="movie app website"
              />
              <div className="reverse" key="back">
                <h1>
                  React Js Web Application for storing movies
                </h1>
                <h2>The project Developed with React Js and Redux</h2>
                <h3>
                  Frontend : React Js(Hooks, Router), Reactstrap,..<br/>
                </h3>
                <p>
                  A simple application of React hooks and router<br />{" "}
                </p>
              </div>
            </ReactCardFlip>

            <div className="options">
              <div onClick={() => toggle4(!view4)}>
                
                  More <FontAwesomeIcon icon={faInfoCircle} />
                
              </div>
              <div>
              </div>
              <div>
                <a href="https://github.com/MohamedJellali/Router-Hooks-React-Checkpoints" target='new'>
                  Source
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-item"
            onMouseEnter={() => {
              toggle5(1);
            }}
            onMouseLeave={() => {
              toggle5(0);
            }}
          >
            <h1>Devices Management Application</h1>
            <ReactCardFlip isFlipped={view5} flipDirection="horizontal">
              <img
                key="front"
                src={angapp}
                alt="angular application"
              />
              <div className="reverse" key="back">
                <h1>
                  A simple Application developed with Angular and Firebase
                </h1>
                <h2>SPA developed with Angular, TypeScript, NgRx, Firebase, authentication..</h2>
                <h3>I develop this application to learn angular</h3>
              </div>
            </ReactCardFlip>

            <div className="options">
              <div onClick={() => toggle5(!view5)}>
                
                  More <FontAwesomeIcon icon={faInfoCircle} />
               
              </div>
              <div>
                <a href="https://github.com/MohamedJellali/Angular" target='new'>
                  Source
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-item"
            onMouseEnter={() => {
              toggle6(1);
            }}
            onMouseLeave={() => {
              toggle6(0);
            }}
          >
            <h1>Blog App with Angular</h1>
            <ReactCardFlip isFlipped={view6} flipDirection="horizontal">
              <img
                key="front"
                src={angularblog}
                alt="blog App"
              />
              <div className="reverse" key="back">
              <h1>
                  A simple Application developed with Angular
                </h1>
                <h2>SPA developed with Angular, TypeScript, NgRx</h2>
                <h3>I develop this application to learn angular</h3>
              </div>
            </ReactCardFlip>

            <div className="options">
              <div onClick={() => toggle6(!view6)}>
                
                  More <FontAwesomeIcon icon={faInfoCircle} />
                
              </div>
              <div>
                <a href="https://github.com/MohamedJellali/BlogAppWithAngular" target='new'>
                  Source
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <h2 style={{ marginTop: "50px" }}>
          I Hope That You Found My Profil Intersting.
          <br />
          For Contacting me, You Can Chat me directly on LinkedIn here:  {" "}
          <a href="https://www.linkedin.com/in/mohamedjellali/r" target="new">
            Mohamed JELLALI  
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <br />
        </h2>
      </div>
      {/*------------Footer---------------*/}
      <div className="footer">
        <div>
          <h2>Connect With Me:</h2>
        </div>
        <div className="icon-container">
          <a
            title="Google"
            className="fa"
            href="mailto:mohamedjjellali@gmail.com"
            target="new"
          >
            <FontAwesomeIcon icon={faGooglePlusG} />
          </a>
          <a
            title="Linkedin"
            className="fa"
            href="https://www.linkedin.com/in/mohamedjellali/"
            target="new"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            title="Facebook"
            className="fa"
            href="https://www.facebook.com/mohamed.jellali.01"
            target="new"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            title="Github"
            className="fa2"
            href="https://github.com/MohamedJellali"
            target="new"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className="made">
          <h2>
            <FontAwesomeIcon icon={faCode} /> with{" "}
            <FontAwesomeIcon icon={faHeart} /> on{" "}
            <FontAwesomeIcon icon={faReact} />{" "}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
