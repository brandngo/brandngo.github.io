import React, { Component } from 'react';
import profileImg from '';
import ReactDOM from 'react-dom';

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
      <section>
        <img src={} alt="profile picture"/>

        <div>
          <a href="">About</a>
          <a href="">Projects</a>
          <a href="">Education</a>
          <a href="">Experience</a>
        </div>
      </section>

      
    );
  }

}

export default Sidebar;