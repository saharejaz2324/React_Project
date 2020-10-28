import React, { Component } from 'react';
import Person from '../Person/Person';

class class_based_implementation extends Component {
  state = {
    person : [
      { name : 'sana' , age : 23 },
      { name : 'Sahar', age : 24 },
      { name: 'Aymun', age: 17 }

    ]
  }
  switchNameHandler = (newName) => {
    this.setState({
      person : [
        { name : newName , age : 23 },
        { name : 'Sahar', age : 24 },
        { name: 'Aymun', age: 7 }
      ]
    })
  }
  render() {
    return(
      <div className="App">
        <h1>Hi I am an class_based_implementation</h1>
        <button onClick = {() => {this.switchNameHandler('Emaan!!!')}}>Switch Name</button> {/* this method is not preferable as this is insufficient at some stage. So, avoid using this syntax */}
        {/* <button onClick = {this.switchNameHandler.bind(this, 'Emaan')}>Switch Name</button> */}
        <Person 
          name= {this.state.person[0].name} 
          age = {this.state.person[0].age}>
        </Person>
        <Person click = {this.switchNameHandler.bind(this, 'Maryam')}
          name= {this.state.person[1].name} 
          age = {this.state.person[1].age}>My hobby is Singing
        </Person>
        <Person 
          name= {this.state.person[2].name} 
          age = {this.state.person[2].age}>
        </Person>
      </div>
    )
  }
}
//   return  React.createElement('div', null, React.createElement('h1', { className: 'App' }, 'Hi... I am a  app!!!'));
//     <div className="App">
//       <h1>Hi I am a react app</h1>
//     </div>

export default class_based_implementation;