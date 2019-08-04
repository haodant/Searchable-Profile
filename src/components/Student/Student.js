import React, { Component } from 'react';
import './Student.css';

const Student = ({ students }) => {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
      search: ''
    };
  }
  render() {
    return (
      <ul className="students">
      { (students.length > 0) ? students.map( (student, index) => {
        const average = student.grades.reduce((p,c,_,a) => p + c/a.length,0)
        return (
          <li className="student" key={student.id}>
            <img src={student.pic} alt='' className="student_img"/>
            <div className="student_name">
              <h2>{`${student.firstName.toUpperCase()} ${student.lastName.toUpperCase()}`}</h2>
            </div>
            <div className="student_details">
              <p>{`Email: ${student.email}`}</p>
              <p>{`Company: ${student.company}`}</p>
              <p>{`Skill: ${student.skill}`}</p>
              <p>{`Average: ${average}%`}</p>
            </div>
          </li>
        )
      }) : <div>Student information is loading...</div>}
      </ul>
      )
    }
}

export default Student;
