import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import aboutmeStyle from './AboutMe.css'; 

class AboutMe extends Component {

  render() {
  
    return (
      <section className="aboutMe-container">
        <h1>Brandon <span>Ngo</span></h1>
        <h2>Toronto, Ontario</h2>
        
        <ul>
          <li>Software Engineer</li>
        </ul>
        
        <ul>
          <a>Github</a>
          <a></a>
          <a>3</a>
          <a>4</a>
        </ul>
    
      </section>
      
    );
  }

}

export default AboutMe;