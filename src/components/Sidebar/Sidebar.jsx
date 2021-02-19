import React, { Component } from 'react';
import profileImg from './images.png';
import ReactDOM from 'react-dom';
import sidebarStyle from './Sidebar.css'; 

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: true,
      projects: false,
      education: false,
      experience: false
    };
  }

  render() {
    return (
      <section className="sidebar-container">
        <div className="">
          <img src={profileImg} alt="profile picture"/>
        </div>

        <div className="directory">
          <a href="">About Me</a>
          <a href="">Projects</a>
          <a href="">Education</a>
          <a href="">Experience</a>
        </div>
      </section>
      
    );
  }

}

export default Sidebar;