import React, { Component } from 'react'
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Blog1 from '../../../assets/blog1.jpg';
import './Blog.scss';
class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          link: "blog-post.html",
          img: 'blog1.jpg',
          day: '20',
          month: 'Jun',
          name: 'By spite about do of do allow blush',
          category: 'Design'
        },
        {
          id: 2,
          link: "blog-post.html",
          img: 'blog2.jpg',
          day: '20',
          month: 'Jun',
          name: 'Two Before Arrow Not Relied',
          category: 'Coding'
        },
        {
          id: 3,
          link: "blog-post.html",
          img: 'blog3.jpg',
          day: '20',
          month: 'Jun',
          name: 'By spite about do of do allow blush',
          category: 'Design'
        },
      ]
    }
  }

  renderBlog = () => {
    const { data } = this.state;
    const result = data.map(value => (
      <Col xs={24} className="col border-line">
        <div className="box-item">
          <div className="image">
            <a href="blog-post.html">
              <img src={Blog1} alt={Blog1}/>
              <span className="info">
                <span className="ion ion-document-text"></span>
              </span>
              <span className="date"><strong>{value.day}</strong>{value.month}</span>
            </a>
          </div>
          <div className="desc">
            <a href="blog-post.html" className="name">{value.name}</a>
            <div className="category">{value.category}</div>
          </div>
        </div>
      </Col>
    ))
    return result;
  }
  
  render() {
    return (
      <div className="card-wrap">
        <div className="content blog">
          <div className="title">Latest Posts</div>
            <Row className="border-line-v">
              { this.renderBlog() }
              <div className="clear"></div>
            </Row>
          </div>
      </div>
    )
  }
}

export default Blog;