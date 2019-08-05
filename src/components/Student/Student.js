import React, { Component } from 'react';
import './Student.css';
import ExpandedList from './ExpandedList';

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      symbol: "+"
    };
  }

  handleExpand = () => {
    this.setState({ expanded: !this.state.expanded });
    if (this.state.expanded) {
      this.setState({ symbol: "+" })
    } else {
      this.setState({ symbol: "-" })
    }
  }

  render() {
    const average = this.props.student.grades.reduce((p,c,_,a) => p + c/a.length,0)
    return (
      <li className="student" key={this.props.student.id}>
        <img src={this.props.student.pic} alt='' className="student_img"/>
        <div className="student_name">
          <h2>{`${this.props.student.firstName.toUpperCase()} ${this.props.student.lastName.toUpperCase()}`}</h2>
          <button onClick={this.handleExpand}>{this.state.symbol}</button>
        </div>
        <div className="student_details">
          <p>{`Email: ${this.props.student.email}`}</p>
          <p>{`Company: ${this.props.student.company}`}</p>
          <p>{`Skill: ${this.props.student.skill}`}</p>
          <p>{`Average: ${average}%`}</p>
          {this.state.expanded ? <ExpandedList grades={this.props.student.grades} tags={this.props.student.tags} id={this.props.student.id} addTagHandler={this.props.addTagHandler}/> : null}
        </div>
      </li>
    )
  }
}

export default Student;
