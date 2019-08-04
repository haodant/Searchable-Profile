import React, { Component } from 'react';
import './App.css';
import Student from './components/Student/Student'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
      search: ''
    };
  }

  componentDidMount() {
    fetch('https://www.hatchways.io/api/assessment/students')
    .then(res => res.json())
    .then(json => json.students)
    .then(students => this.setState({ 'students': students }))
  }

  updateSearch = (e) => {
    this.setState({ search: e.target.value })
  }

  render() {
    let filteredList = this.state.students.filter(
      student => {
        return student.firstName.indexOf(this.state.search) !== -1 || student.lastName.indexOf(this.state.search) !== -1;
      }
    );
    return (
      <div className="App">
        <div className="container">
          <input className="searchbar" type="text" placeholder="Search by name" value={this.state.search} onChange={this.updateSearch} />
          <Student students = {filteredList}/>
        </div>
      </div>
    );
  }
}

export default App;
