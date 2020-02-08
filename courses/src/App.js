import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';


import Jumbotron from './jumbotron'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      course_modules: [
        {id: 1, title: '1', description: 'Lorem ipsum', active: false},
        {id: 1, title: '1', description: 'Lorem ipsum', active: false},
        {id: 1, title: '1', description: 'Lorem ipsum', active: false},
        {id: 1, title: '1', description: 'Lorem ipsum', active: false},
        {id: 1, title: '1', description: 'Lorem ipsum', active: false}    
      ]
    }
  }
  render() {
    return (
      <Jumbotron />
    )
  }

}
export default App;
