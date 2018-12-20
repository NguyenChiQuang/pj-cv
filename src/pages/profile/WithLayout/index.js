import React from 'react';
import './WithLayout.scss';
import Header from './components/Header';
import HomeCard from './components/HomeCard';

const WithLayout = (Component) => {
  return class extends React.Component {
    render () {
      return (
        <div className="app-body">
          <div className="background-profile"></div>
          <div className="container opened">
            <div className="body-header">
              <Header  />
            </div>
            <div className="body-home_card">
              <HomeCard />
            </div>
            <div className="card-inner body-content">
              <Component {...this.props}/>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default WithLayout;