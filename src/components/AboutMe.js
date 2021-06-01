import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faReact, faNode,  faCss3,  faHtml5,  faJs} from "@fortawesome/free-brands-svg-icons";
import '../App.css'
import mongo from '../images/mongodb.svg'
import express from '../images/express.svg'

function AboutMe() {
    return (
        <div>
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
        </div>
    )
}

export default AboutMe

