import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import Jumbotron from './jumbotron'
import Table from './Table/Table'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      course_modules: [
        {id: 1, title: '1', description: 'Lorem ipsum', active: false},
        {id: 2, title: '1', description: 'Lorem ipsum', active: false},
        {id: 3, title: '1', description: 'Lorem ipsum', active: false},
        {id: 4, title: '1', description: 'Lorem ipsum', active: false},
        {id: 5, title: '1', description: 'Lorem ipsum', active: false}    
      ]
    }
  }

  videoChangeActive(item, event) {
    event.preventDefault()

    let course_modules = [...this.state.course_modules]

    course_modules.map( data => {
      data.active = false
    })

    item.active = !item.active

    course_modules[item.id -1] = item

    return this.setState({course_modules})

  }

  render() {
    return (
      <div>
        <Jumbotron />
        <Table videoChangeActive = {this.videoChangeActive.bind(this)} course_modules = { this.state.course_modules } />
      </div>
      
    )
  }

}
export default App;
