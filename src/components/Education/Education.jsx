import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import educationStyle from './Education.css'; 

class Education extends Component {

  render() {
    

    return (
      <section className="education-container">
        <h3>Education</h3>
        
        <h2>University of Waterloo</h2>
        <h4 className="info">Bachelors of Computer Science</h4>
    
      </section>
      
    );
  }

}

export default Education;