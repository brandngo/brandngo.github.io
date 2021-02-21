import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import rootstyle from './root.css';
import Sidebar from '../components/Sidebar/Sidebar';
import About from '../components/About/AboutMe';
import Projects from '../components/Projects/Projects';
import Sticky from 'react-stickynode';

class ScreensRoot extends Component {
  render() {
    return (
      <section className="screen">
        <Sticky>
          <Sidebar className="sidebar"/>
        </Sticky>

        <div className="pages">
          <About className="about"/>
          <Projects className="projects"/>
          
        </div>

      </section>
    );
  }

}

export default ScreensRoot;

//
//