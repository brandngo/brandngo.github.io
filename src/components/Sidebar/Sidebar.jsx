import React, { Component } from 'react';
import profileImg from './images.png';
import ReactDOM from 'react-dom';
import sidebarStyle from './Sidebar.css'; 

class Sidebar extends Component {
  state = {
    about: 'red',
    projects: 'white',
    education: 'white',
    experience: 'white'
  }
  
  listenScrollEvent = e => {
    if (window.scrollY <= window.innerHeight) {
      this.setState({about: 'red', projects: 'white', education: 'white', experience: 'white'});
    } else if (window.scrollY <= 2 * window.innerHeight) {
      this.setState({about: 'white', projects: 'red', education: 'white', experience: 'white'});
    } else if (window.scrollY < 3 * window.innerHeight) {
      this.setState({about: 'white', projects: 'white', education: 'red', experience: 'white'});
    } else {
      this.setState({about: 'white', projects: 'white', education: 'white', experience: 'red'});
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  render() {
    

    return (
      <section className="sidebar-container">
        <div className="">
          <img src={profileImg} alt="profile picture"/>
        </div>

        <div className="directory">
          <a href="" style={{color: this.state.about}}>About Me</a>
          <a href="" style={{color: this.state.projects}}>Projects</a>
          <a href="" style={{color: this.state.education}}>Education</a>
          <a href="" style={{color: this.state.experience}}>Experience</a>
        </div>
      </section>
      
    );
  }

}

export default Sidebar;