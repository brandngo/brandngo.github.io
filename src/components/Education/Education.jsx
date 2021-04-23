import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import educationStyle from './Education.css'; 

class Education extends Component {

  render() {
    

    return (
      <section className="education-container">
        <h3>Education</h3>
        
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

export default Education;