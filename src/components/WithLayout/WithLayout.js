import React from 'react';

import './WithLayout.css';
import Header from './components/Header';
import HomeCard from './components/HomeCard';

const WithLayout = (Component) => {
  return class extends React.Component {
    render () {
      return (
        <div className="app-body">
          <div className="background-profile"></div>
          <div className="container opened">
            <Header />
            <HomeCard />
            <div className="card-inner contacts">
              <Component {...this.props} />
            </div>
          </div>
        </div>
      )
    }
  }
}

export default WithLayout;