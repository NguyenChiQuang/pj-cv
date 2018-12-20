import React, { Component } from 'react'
import './About.scss';
import AboutMe from './components/AboutMe';
import AboutService from './components/AboutService';
import AboutFunFact from './components/AboutFunFact';
class About extends Component {
  render() {
    return (
      <div className="about-content">
        <div className="card-wrap">
          <AboutMe />
          <AboutService />
          <AboutFunFact />
        </div>
        
      </div>
    )
  }
}
export default About;