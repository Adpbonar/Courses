import React, { Component } from 'react';
import './App.css';

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
      <div>This is our home component</div>
    )
  }

}
export default App;
