import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import aboutmeStyle from './AboutMe.css'; 

class AboutMe extends Component {

  render() {
  
    return (
      <section className="aboutMe-container">
        <h1>Brandon <span>Ngo</span></h1>
        <h2>TORONTO, ONTARIO</h2>
        
        <ul className="info">
          <li>Software Developer</li>
          <li>Hobbyist</li>
          <li>Explorer</li>
        </ul>
        
        <ul>
          <FontAwesomeIcon icon={["fab", "github"]} />
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
          <FontAwesomeIcon icon={["fab", "github"]} />
        </ul>
    
      </section>
      
    );
  }

}

export default AboutMe;