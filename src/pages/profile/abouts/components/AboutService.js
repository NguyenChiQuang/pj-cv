import React, { Component } from 'react'
import classNames from 'classnames';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

import './AboutService.scss';

export default class AboutService extends Component {
  state = {
    data: [
      {
        id: 1,
        icon: "ion ion-code",
        title: "Web Development",
        description: "Modern and mobile-ready website that will help you reach all of your marketing."
      },
      {
        id: 2,
        icon: "ion ion-music-note",
        title: "Music Writing",
        description: "Music copying, transcription, arranging and composition services."
      },
      {
        id: 3,
        icon: "ion ion-speakerphone",
        title: "Advetising",
        description: "Advertising services include television, radio, print, mail and web."
      },
      {
        id: 4,
        icon: "ion ion-ios-game-controller-b",
        title: "Game Development",
        description: "Developing memorable and unique mobile android, ios games."
      },
    ]
  }

  renderService = () => {
    const { data } = this.state;
    const results = data.map(value => (
      <Col sm={24} md={12} key={value.id} className={classNames("col border-line", {"border-line-h": value.id === 1 || value.id === 2})}>
        <div className="service-item">
          <div className="icon">
            <span className={value.icon}></span>
          </div>
          <div className="name">{value.title}</div>
          <p>{value.description}</p>
        </div>
      </Col>
    ));
    return results;
  }

  render() {
    return (
      <div className="content services">
        <div className="title">My Services</div>
        <div className="row ">
          <Row >
            {this.renderService()}
          </Row>
          <div className="clear"></div>
        </div>
      </div>
    )
  }
}
