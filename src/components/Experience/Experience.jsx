import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import experienceStyle from './Experience.css'; 

class Experience extends Component {

  render() {
    

    return (
      <section className="experience-container">
        <h1>Brandon <h1>Ngo</h1></h1>
        <h2>Toronto, Ontario</h2>
        
        <ol>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ol>
        
        <ul>
          <a>1</a>
          <a>2</a>
          <a>3</a>
          <a>4</a>
        </ul>
    
      </section>
      
    );
  }

}

export default Experience;