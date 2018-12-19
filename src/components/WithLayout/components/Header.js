import React, { Component } from 'react'
import './Header.scss';
export default class Header extends Component {
  render() {
    return (
      <header className="header">
				<div className="top-menu">
					<ul>
						<li className="">
							<a href="#about-card">
								<span className="icon ion-person"></span>
								<span className="link">About</span>
							</a>
						</li>
						<li className="">
							<a href="#resume-card">
								<span className="icon ion-android-list"></span>
								<span className="link">Resume</span>
							</a>
						</li>
						<li className="">
							<a href="#works-card">
								<span className="icon ion-paintbrush"></span>
								<span className="link">Works</span>
							</a>
						</li>
						<li className="">
							<a href="#blog-card">
								<span className="icon ion-chatbox-working"></span>
								<span className="link">Blog</span>
							</a>
						</li>
						<li className="active">
							<a href="#contacts-card">
								<span className="icon ion-at"></span>
								<span className="link">Contact</span>
							</a>
						</li>
					</ul>
				</div>
			</header>
    )
  }
}
