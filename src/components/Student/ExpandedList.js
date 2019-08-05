import React, { Component } from 'react';

class ExpandedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagInput: ''
    };
  }

  // handleInput = (e) => {
  //   // this.setState({ currentTag: e.target.value });
  //   this.props.addTagHandler(this.props.id, e.target.value)
  // }
  //
  // addTag = (e) => {
  //   this.setState({
  //     tags: [...this.state.tags, this.state.currentTag],
  //     currentTag: '' });
  //   e.preventDefault();
  //
  // }

  updateInputText = (e) => {
    this.setState({
      tagInput: e.target.value
    })
  }

 handleInputTag = (e) => {
   // e.preventDefault();
   if (e.key === 'Enter') {
     this.props.addTagHandler(this.props.id, this.state.tagInput)
     this.setState({
       tagInput: ''
     })
   }
 }

  render() {
      return (
        <div>
          <div className="gradeList">
            {
              this.props.grades.map( (grade, index) => {
                return <p key={index}>Test {index + 1}:     {grade}%</p>
              })
            }
          </div>

          <p>{this.props.tags.join(' ')}</p>
          <input className="searchbar" type="text" placeholder="Add a tag"  value={this.state.tagInput} onChange={this.updateInputText} onKeyPress={this.handleInputTag}/>
        </div>
      );
    }
}

export default ExpandedList;
