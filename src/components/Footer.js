import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGooglePlusG,faFacebookF,faLinkedinIn,faGithub, faReact} from "@fortawesome/free-brands-svg-icons";
import {faCode, faHeart} from "@fortawesome/free-solid-svg-icons";

import '../App.css'


function Footer() {
    return (
        <div>
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
    )
}

export default Footer
