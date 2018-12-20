import React, { Component } from 'react'
import Header from './components/Header';
import HomeCard from './components/HomeCard';

import './Home.scss';
import About from '../abouts/About';
import Resumes from '../resumes/Resumes';
import Work from '../works/Work';
import Blog from '../blogs/Blog';
import Contact from '../contacts/Contact1';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "About"
    }
  }

  itemMenu = item => {
    this.setState({
      item: item
    })
  }

  renderContent = () => {
    const { item } = this.state;
    switch(item) {
      case 'About': 
        return <About />
      case 'Resume': 
        return <Resumes />
      case 'Works': 
        return <Work />
      case 'Blog': 
        return <Blog />
      case 'Contact': 
        return <Contact />
      default:
        return <About />
    }  
  }

  render() {
    const { item } = this.state;
    return (
      <div className="app-body">
        <div className="background-profile"></div>
        <div className="container opened">
          <div className="body-header">
            <Header itemMenu={this.itemMenu} item={item} />
          </div>
          <div className="body-home_card">
            <HomeCard />
          </div>
          <div className="card-inner body-content">
            {this.renderContent()}
          </div>
        </div>
      </div>
    )
  }
}
