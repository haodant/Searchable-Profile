import React, { Component } from 'react';
import './App.css';
import Student from './components/Student/Student'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
      searchName: '',
      searchTag: ''
    };
  }

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/haodant/dummy-data/students')
    .then(res => res.json())
    .then(students => {
      students.map(student => student.tags = []);
      this.setState({ students });
    })
  }

  updateSearchByName = (e) => {
    this.setState({ searchName: e.target.value })
  }

  updateSearchByTag = (e) => {
    this.setState({ searchTag: e.target.value })
  }

  addTagHandler = (id, tag) => {
    let students = this.state.students;
    students.forEach(student => {
      if (student.id === id) {
        student.tags.push(tag);
      }
    });

    this.setState({
      students
    });
  }

  render() {
    let filteredList = this.state.students.filter(
      student => {
        let isSearchByName = student.firstName.toLowerCase().indexOf(this.state.searchName.toLowerCase()) !== -1 || student.lastName.toLowerCase().indexOf(this.state.searchName.toLowerCase()) !== -1;
        let isSearchByTag = this.state.searchTag.length > 0 ? student.tags.join('').indexOf(this.state.searchTag) !== -1 : true;
        return isSearchByTag && isSearchByName
      }
    );

    return (
      <div className="App">
        <div className="container">
          <input className="searchbar" type="text" placeholder="Search by name" value={this.state.searchName} onChange={this.updateSearchByName} />
          <input className="searchbar" type="text" placeholder="Search by tags" value={this.state.searchTag} onChange={this.updateSearchByTag} />
          <ul className="students">
            { (filteredList.length > 0) ?
              filteredList.map(student => {
                {/* use addTagHandler to allow child component to update state here, would be easier with redux to manage data, but the app is not complex so using */}
                return <Student student = {student} key={student.id} addTagHandler={this.addTagHandler}/>
              }) : <div>Student information is loading...</div>}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
