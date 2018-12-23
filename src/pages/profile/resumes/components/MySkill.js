import React, { Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

import './MySkill.scss';
class MySkill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      design: [
        {
          id: 1,
          name: 'Web Design',
          percentage: '90'
        },
        {
          id: 2,
          name: 'Write Music',
          percentage: '65'
        },
        {
          id: 3,
          name: 'Photoshop',
          percentage: '75'
        },
        {
          id: 4,
          name: 'Graphic Design',
          percentage: '85'
        },
      ],
      coding: [
        {
          id: 1,
          name: 'WordPress',
          percentage: '90'
        },
        {
          id: 2,
          name: 'PHP / MYSQL',
          percentage: '65'
        },
        {
          id: 3,
          name: 'Angular / JavaScript',
          percentage: '75'
        },
        {
          id: 4,
          name: 'HTML / CSS',
          percentage: '85'
        },
      ],
    }
  }

  renderDesign = () => {
    const { design } = this.state;
    const result = design.map(value => (
      <li class="border-line-h" key={value.id}> 
        <div class="name">{value.name}</div>
        <div class="progress">
          <div class="percentage" style={{ width:`${value.percentage}%` }}></div>
        </div>
      </li>
    ));
    return result;
  }

  renderCoding = () => {
    const { coding } = this.state;
    const result = coding.map(value => (
      <li class="border-line-h" key={value.id}> 
        <div class="name">{value.name}</div>
        <div class="progress">
          <div class="percentage" style={{ width:`${value.percentage}%` }}></div>
        </div>
      </li>
    ));
    return result;
  }
  

  render() {
    return (
      <div class="content skills">
        <div class="title">My Skills</div>
        <Row>
          <Col sm={24} md={12} className="col border-line">
            <div class="skills-list">
              <div class="skill-title border-line-h">
                <div class="icon"><i class="ion ion-easel"></i></div>
                <div class="name">Design</div>
              </div>
              <ul>
                { this.renderDesign() }
              </ul>
            </div>
          </Col>
          <Col sm={24} md={12} className="col border-line">
            <div class="skills-list">
              <div class="skill-title border-line-h">
                <div class="icon"><i class="ion ion-code"></i></div>
                <div class="name">Coding</div>
              </div>
              <ul>
              { this.renderCoding() }
              </ul>
            </div>
          </Col>
						<div class="clear"></div>
        </Row>
			</div>
    );
  }
}

export default MySkill;