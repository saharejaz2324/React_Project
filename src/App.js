import { render } from '@testing-library/react';
import React, {useState} from 'react';
// import React , { Component } from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {

  const [ personState, setPersonState ] = useState({
    person : [
      { name : 'sana' , age : 23 },
      { name : 'Sahar', age : 24 },
      { name: 'Aymun', age: 17 }
    ],
    otherState: 'Manage Some other state'
  });

  const switchNameHandler = () => {
    setPersonState({
      person : [
        { name : 'Emaan' , age : 23 },
        { name : 'Sahar', age : 24 },
        { name: 'Aymun', age: 7 }
      ]
    })
  }

    return (
      <div className="App">
        <h1>Hi I am an app</h1>
        <button onClick = {switchNameHandler}>Switch Name</button>
        <Person name= {personState.person[0].name} age = {personState.person[0].age}></Person>
        <Person name= {personState.person[1].name} age = {personState.person[1].age}>My hobby is Singing</Person>
        <Person name= {personState.person[2].name} age = {personState.person[2].age}></Person>
      </div>
    )
}

// class App extends Component {
//   state = {
//     person : [
//       { name : 'sana' , age : 23 },
//       { name : 'Sahar', age : 24 },
//       { name: 'Aymun', age: 17 }

//     ]
//   }

  // switchNameHandler = () => {
  //   this.setState({
  //     person : [
  //       { name : 'Emaan' , age : 23 },
  //       { name : 'Sahar', age : 24 },
  //       { name: 'Aymun', age: 7 }
  //     ]
  //   })
  // }

//   render() {
//     return(
//       <div className="App">
//         <h1>Hi I am an app</h1>
//         <button onClick = {this.switchNameHandler}>Switch Name</button>
//         <Person name= {this.state.person[0].name} age = {this.state.person[0].age}></Person>
//         <Person name= {this.state.person[1].name} age = {this.state.person[1].age}>My hobby is Singing</Person>
//         <Person name= {this.state.person[2].name} age = {this.state.person[2].age}></Person>
//       </div>
//     )
//   }
// }
  // return  React.createElement('div', null, React.createElement('h1', { className: 'App' }, 'Hi... I am a  app!!!'));
    // <div className="App">
    //   <h1>Hi I am a react app</h1>
    // </div>

export default App;
