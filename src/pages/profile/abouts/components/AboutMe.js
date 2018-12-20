import React, { Component } from 'react'
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import './AboutMe.scss';

export default class AboutMe extends Component {
  render() {
    return (
      <div className="content about">
        <div className="title">About Me</div>
        <Row>
          <Col md={24} className="col border-line">
            <div className="text-box ">
              <p>
                I am Nguyen Quang, website application developer from VietNam, Asian. I have rich experience in 
                web site design and building and customization, also I am good at Reactjs, React Native, Nodejs, Laravel. 
                I love to talk with you about our unique.
              </p>
            </div>
            <div className="info-list">
              <ul>
                <li><strong>Age . . . . .</strong> 23</li>
                <li><strong>Residence . . . . .</strong> Viet Nam</li>
                <li><strong>Freelance . . . . .</strong> Available</li>
                <li><strong>Address . . . . .</strong> Ha Noi, Viet Nam</li>
              </ul>
              <div className="clear"></div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
