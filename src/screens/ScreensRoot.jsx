import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import rootstyle from './root.css';
import Sidebar from '../components/Sidebar/Sidebar';
import About from '../components/About/AboutMe';
import Projects from '../components/Projects/Projects';
import Education from '../components/Education/Education';
import Experience from '../components/Experience/Experience';

class ScreensRoot extends Component {
  render() {
    return (
      <section className="screen">
        <Sidebar className="sidebar"/>

        <div className="pages">
          <About className="about"/>
          <Projects className="projects"/>
          <Education className="education"/>
          <Experience className="experience"/>
          
        </div>

      </section>
    );
  }

}

export default ScreensRoot;