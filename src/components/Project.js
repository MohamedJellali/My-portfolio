import React, {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedinIn,faGithub} from "@fortawesome/free-brands-svg-icons";
import {faInfoCircle,faPlayCircle} from "@fortawesome/free-solid-svg-icons";

import ReactCardFlip from "react-card-flip";

import wevent from '../images/wevent.PNG'
import marvel from '../images/marvel.PNG'
import portfolio from '../images/portfolio.PNG'
import movieapp from '../images/movieapp.PNG'
import angapp from '../images/angapp.PNG'
import angularblog from '../images/Angularblog.PNG'
import todoList from '../images/todoList.PNG'
import chatapp from '../images/chatapp.PNG'

import '../App.css'

function Project() {

    const [view1, toggle1] = useState(0);
    const [view2, toggle2] = useState(0);
    const [view3, toggle3] = useState(0);
    const [view4, toggle4] = useState(0);
    const [view5, toggle5] = useState(0);
    const [view6, toggle6] = useState(0);
    const [view7, toggle7] = useState(0);
    const [view8, toggle8] = useState(0);

    return (
        <div>
          <div id="projects" className="projects">
        <h1>Projects</h1>
        <h2 style={{ maxWidth: "90%" }}>
          Here is a some of my projects, Hope you like it.
          <br />
          Still there's more in my          
          <a href="https://github.com/MohamedJellali" target="new">
             Github 
          </a>
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
                <h2>The project Developed with React Js for create my portfolio and apply some css tricks with : <br/>
                react-vertical-timeline-component, react particles js,.. 
                </h2>
                <h3>
                  Frontend : React Js, Reactstrap, react particles js, react,..<br/>
                </h3>
                <p>
                  My Portfolio website (inspired from (c) Fahad Israr)<br />{" "}
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
              toggle8(1);
            }}
            onMouseLeave={() => {
              toggle8(0);
            }}
          >
            <h1>Chat Application</h1>
            <ReactCardFlip isFlipped={view8} flipDirection="horizontal">
              <img
                key="front"
                src={chatapp}
                alt="todolist app"
              />
              <div className="reverse" key="back">
                <h1>
                  Chat Application developed with React Js and Chat Engine
                </h1>
                <h2>A very cool chat application that support the instant conversation</h2>
                <h3>
                Copy Right of the project : "JavaScript Mastery"<br/>
                  
                </h3>
                <p>
                  If you want to try it, you could Launch the application and login with : <br />
                  -username: Joker <br />
                  -password : 123456 <br />
                  Send me a massage and I will reply when I connect !
                </p>
              </div>
            </ReactCardFlip>

            <div className="options">
              <div onClick={() => toggle8(!view8)}>
                
                  More <FontAwesomeIcon icon={faInfoCircle} />
                
              </div>
              
              <div>
                <a href="https://chat-with-mj.herokuapp.com/">
                  Launch <FontAwesomeIcon icon={faPlayCircle} />
                </a>
              </div>
                  <div>
                      
                <a href="https://github.com/MohamedJellali/Chat-Application" target='new'>
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
            <h1>Movies Store Web Application</h1>
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
                  
                  <div>
                      
                <a href="https://github.com/MohamedJellali/Router-Hooks-React-Checkpoints" target='new'>
                  Source
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
                  </div>
            </div>
          </div>



          <div
            className="project-item"
            onMouseEnter={() => {
              toggle7(1);
            }}
            onMouseLeave={() => {
              toggle7(0);
            }}
          >
            <h1>Todo List App</h1>
            <ReactCardFlip isFlipped={view7} flipDirection="horizontal">
              <img
                key="front"
                src={todoList}
                alt="todolist app"
              />
              <div className="reverse" key="back">
                <h1>
                  Example of Todo List Devoloped with React and Redux
                </h1>
                <h2>The project Developed with the React and Redux</h2>
                <h3>
                  Frontend : React Js, Bootstrap, Redux,..<br/>
                  
                </h3>
                <p>
                  A todo list App, redux for the data management, you can Create, Update and Delete your tasks<br />{" "}
                </p>
              </div>
            </ReactCardFlip>

            <div className="options">
              <div onClick={() => toggle7(!view7)}>
                
                  More <FontAwesomeIcon icon={faInfoCircle} />
                
              </div>
              
              <div>
                <a href="https://todolist-mj.herokuapp.com/">
                  Launch <FontAwesomeIcon icon={faPlayCircle} />
                </a>
              </div>
                  <div>
                      
                <a href="https://github.com/MohamedJellali/React-Redux-Todolist-Checkpoint-" target='new'>
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
          To get contact with me, You Can Chat me directly on LinkedIn here:  {" "}
          <a href="https://www.linkedin.com/in/mohamedjellali/r" target="new">
            Mohamed JELLALI  
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <br />
        </h2>
      </div>

        </div>
    )
}

export default Project
