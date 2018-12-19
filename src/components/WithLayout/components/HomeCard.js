import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class HomeCard extends Component {
  render() {
    return (
      <div className="card-started" id="home-card">
				<div className="profile">
					<div className="slide"></div>
					<div className="image">
						<img src="images/profile.png" alt="" />
					</div>
					<div className="title">Ryan Adlard</div>
					<div className="subtitle">Web Designer</div>
					<div className="social">
						<NavLink to="https://dribbble.com/" activeClassName="selected"><span className="fab fa-dribbble"></span></NavLink>
						<NavLink to="https://twitter.com/" activeClassName="selected"><span className="fab fa-twitter"></span></NavLink>
						<NavLink to="https://github.com/" activeClassName="selected"><span className="fab fa-github"></span></NavLink>
						<NavLink to="https://www.spotify.com/" activeClassName="selected"><span className="fab fa-spotify"></span></NavLink>
						<NavLink to="https://stackoverflow.com/" activeClassName="selected"><span className="fab fa-stack-overflow"></span></NavLink>
					</div>
					<div className="lnks">
						<NavLink to="#" className="lnk" activeClassName="selected">
							<span className="text">Download CV</span>
							<span className="ion ion-archive"></span>
						</NavLink>
						<NavLink to="#" className="lnk discover" activeClassName="selected">
							<span className="text">Contact Me</span>
							<span className="arrow"></span>
						</NavLink>
					</div>
				</div>
			</div>
    )
  }
}
