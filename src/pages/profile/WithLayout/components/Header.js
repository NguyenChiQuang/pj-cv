import React, { Component } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom'
import './Header.scss';

export default class Header extends Component {
	static displayName = "HeaderProfile";
	constructor(props) {
		super(props);
		this.state = {
			lists : [
				{
					icon: "fa fa-user",
					name: "About"
				},
				{
					icon: "fa fa-user",
					name: "Resume"
				},
				{
					icon: "fa fa-paint-brush",
					name: "Works"
				},
				{
					icon: "fa fa-user",
					name: "Blog"
				},
				{
					icon: "fa fa-user",
					name: "Contact"
				},
			],
			active: ""
		}
  }
  
   handleClick = item => {
		this.setState({
			active: item
		}, () => {
			this.props.itemMenu(item.toLowerCase());
		})
  }

	ListItem = () => {
		const { lists, active } = this.state;
		const item = lists.map((value, key) => (
			<li 
				className={classNames({ active: active === value.name })} 
				key={key} 
				onClick={() => this.handleClick(value.name)}
			>
				<span className={value.icon}></span>
				<span className="link">{value.name}</span>
			</li>
		))
		return item;
	}
	
  render() {
    return (
      <header className="header">
				<div className="top-menu">
					<ul>
						{ this.ListItem() }
					</ul>
				</div>
			</header>
    )
  }
}
