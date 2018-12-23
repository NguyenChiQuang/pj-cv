import React, { Component } from 'react'
import Resume from './components/Resume';
import MySkill from './components/MySkill';

class Resumes extends Component {
  render() {
    return (
      <div className="card-wrap">
        <Resume />
        <MySkill />
      </div>
    )
  }
}
export default Resumes;