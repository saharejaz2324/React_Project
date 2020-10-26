import React , { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person : [
      { name : 'sana' , age : 23 },
      { name : 'Sahar', age : 24 },
      { name: 'Aymun', age: 17 }

    ]
  }

  render() {
    return(
      <div className="App">
        <h1>Hi I am an app</h1>
        <button ></button>
        <Person name= {this.state.person[0].name} age = {this.state.person[0].age}></Person>
        <Person name= {this.state.person[1].name} age = {this.state.person[1].age}>My hobby is Singing</Person>
        <Person name= {this.state.person[2].name} age = {this.state.person[2].age}></Person>
      </div>
    )
  }
  
  // return  React.createElement('div', null, React.createElement('h1', { className: 'App' }, 'Hi... I am a  app!!!'));
    // <div className="App">
    //   <h1>Hi I am a react app</h1>
    // </div>
}

export default App;
