import React, { Component } from 'react';

class ExpandedList extends Component {
  render() {

      return (
        <div className="gradeList">
          {
            this.props.grades.map( (grade, index) => {
              return <p key={index}>Test {index + 1}:     {grade}%</p>
            })
          }
        </div>
      );
    }
}

export default ExpandedList;
