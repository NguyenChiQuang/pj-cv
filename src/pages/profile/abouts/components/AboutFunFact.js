import React, { Component } from 'react'
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

export default class AboutFunFact extends Component {
  state = {
    data: [
      {
        id: 1,
        icon: "ion ion-disc",
        name: "80 Albumes Listened"
      },
      {
        id: 2,
        icon: "ion ion-trophy",
        name: "15 Awards Won"
      },
      {
        id: 3,
        icon: "ion ion-coffee",
        name: "1 000 Cups of coffee"
      },
      {
        id: 4,
        icon: "ion ion-flag",
        name: "10 Countries Visited"
      },
    ]
  }

  renderFunFact = () => {
    const { data } = this.state;
    const results = data.map(value => (
      <Col md={6} sm={3} key={value.id} className="col border-line">
        <div className="fuct-item">
          <div className="icon">
            <span className={value.icon}></span>
          </div>
          <div className="name">{value.name}</div>
        </div>
      </Col>
    ));
    return results;
  }

  render() {
    return (
      <div className="content fuct">
        <div className="title">Fun Fact</div>
        <div className="row fuct-items">
          <Row>
            {this.renderFunFact()}
          </Row>
          <div className="clear"></div>
        </div>

      </div>
    )
  }
}
