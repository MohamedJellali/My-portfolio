import React from 'react'
import '../App.css'
import Particles from "react-particles-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGooglePlusG,faFacebookF,faLinkedinIn,faGithub} from "@fortawesome/free-brands-svg-icons";
import {faDownload,faChevronCircleDown} from "@fortawesome/free-solid-svg-icons";
import resume from '../resume/Mohamed_JELLALI_CV.pdf'

function Cover() {

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


    return (
        <div>
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
        </div>
    )
}

export default Cover
