import React, { Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import classNames from 'classnames';
import './Resume.scss';
class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: [
        {
          id: 1,
          date: '2013 - Present',
          name: 'Art Director',
          company: 'Facebook Inc.',
          description: 'Collaborate with creative and development teams on the execution of ideas.',
          active: true
        },
        {
          id: 2,
          date: '2011 - 2012',
          name: 'Front-end Developer',
          company: 'Google Inc.',
          description: 'Monitored technical aspects of the front-end delivery for several projects.',
          active: false
        },
        {
          id: 3,
          date: '2009 - 2010',
          name: 'Senior Developer',
          company: 'Mainjs Inc.',
          description: 'Optimize website performance using latest technology.',
          active: false
        }
      ],
      education: [
        {
          id: 1,
          date: '2006 - 2008',
          name: 'Art University',
          company: 'New York',
          description: "Bachelor's Degree in Computer Science ABC Technical Institute, Jefferson, Missouri.",
          active: true
        },
        {
          id: 2,
          date: '2005 - 2006',
          name: 'Programming Course',
          company: 'Paris',
          description: 'Coursework - Git, WordPress, Javascript, iOS, Android.',
          active: false
        },
        {
          id: 3,
          date: '2004 - 2005',
          name: 'Web Design Course',
          company: 'London',
          description: 'Converted Photoshop layouts to web pages using HTML, CSS, and JavaScript.',
          active: false
        }
      ],
    }
  }

  renderExperience = () => {
    const { experience } = this.state;
    const result = experience.map(value => (
      <div claclassNamess={classNames("resume-item border-line-h", {active: value.active})} key={value.id}>
        <div className="date">{value.date}</div>
        <div className="name">{value.name}</div>
        <div className="company">{value.company}</div>
        <p> {value.description} </p>
      </div>
    ));
    return result;
  }

  renderEducation = () => {
    const { education } = this.state;
    const result = education.map(value => (
      <div className={classNames("resume-item border-line-h")} key={value.id}>
        <div className="date">{value.date}</div>
        <div className="name">{value.name}</div>
        <div className="company">{value.company}</div>
        <p> {value.description} </p>
      </div>
    ));
    return result;
  }
  
  render() {
    return (
      <div className="content resume">
        <div className="title">Resume</div>
        <Row>
          <Col sm={24} md={12} className="col border-line">
            <div className="resume-title border-line-h">
              <div className="icon"><i className="ion ion-briefcase"></i></div>
              <div className="name">Experience</div>
            </div>
            <div className="resume-items">
              { this.renderExperience() }
            </div>
          </Col>
          <Col sm={24} md={12} className="col border-line">
            <div className="resume-title border-line-h">
                <div className="icon"><i className="ion ion-university"></i></div>
                <div className="name">Education</div>
              </div>
              <div className="resume-items">
                { this.renderEducation() }
              </div>
          </Col>
          <div className="clear"></div>
        </Row>
      </div>
    );
  }
}

export default Resume;