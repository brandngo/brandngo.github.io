import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import projectsStyle from './Projects.css'; 

class Projects extends Component {

  render() {
    

    return (
      <section className="projects-container">
        <h3>Projects</h3>
        
        <div>
          <h2>interAction</h2>
          <p className="info">Submitted to cuHacking 2021</p>

          <ul>
            <li>Implementation of voice and instant messaging using sockets</li>
          </ul>
        </div>
    
      </section>
      
    );
  }

}

export default Projects;