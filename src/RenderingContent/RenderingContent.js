import React, { Component } from "react";
import Person from '../Person/Person';

class RenderingContent extends Component {
  state = {
    person: [
      { name: "sana", age: 23 },
      { name: "Sahar", age: 24 },
      { name: "Aymun", age: 17 },
    ],
    showPerson: false,
  };

  tooglePersonHandler = () => {
    const doesshow = this.state.showPerson;
    this.setState({
      showPerson: !doesshow,
    });
  };
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    return (
      <div className="App">
        <h1>Hi I am an class_based_implementation</h1>
        <button style={style} onClick={this.tooglePersonHandler}>
          Toogle Person
        </button>{" "}
        {/* this method is not preferable as this is insufficient at some stage. So, avoid using this syntax */}
        {/* <button onClick = {this.switchNameHandler.bind(this, 'Emaan')}>Switch Name</button> */}
        {
          // default java script ternary expression
          this.state.showPerson ? (
            <div>
              <Person
                changed={this.nameChangedHandler}
                name={this.state.person[0].name}
                age={this.state.person[0].age}
              ></Person>
              <Person
                name={this.state.person[1].name}
                age={this.state.person[1].age}
              >
                My hobby is Singing
              </Person>
              <Person
                name={this.state.person[2].name}
                age={this.state.person[2].age}
              ></Person>
            </div>
          ) : null
        }
      </div>
    );
  }
}

export default RenderingContent;
