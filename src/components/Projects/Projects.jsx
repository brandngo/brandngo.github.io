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

        <div>
          <h2>Food Tracker</h2>
          <p className="info">Submitted to yuHacks 2021</p>
          <ul>
            <li>Keeps track of food expiration dates</li>
            <li>Implementation of a CRUD React Native app</li>
            <li>Uses Barcode API to automate entries</li>
          </ul>
        </div>

        <div>
          <h2>Social Links</h2>
          <ul>
            <li>Allows user to input social media accounts in one spot</li>
            <li>Implementation of a CRUD React app</li>
            <li></li>
          </ul>
        </div>

        <div>
          <h2>Cyrptocurrency Ticker</h2>
          <ul>
            <li>Allows user to input social media accounts in one spot</li>
            <li>Implementation of a CRUD React app</li>
            <li></li>
          </ul>
        </div>

        <div>
          <h2>URL Shortener</h2>
          <ul>
            <li>Allows user to input social media accounts in one spot</li>
            <li>Implementation of a CRUD React app</li>
            <li></li>
          </ul>
        </div>
    
      </section>
      
    );
  }

}

export default Projects;