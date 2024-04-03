import { Component } from "react";

export class ClassTrafficLight extends Component {
  state = {
    stateValue: 0,
  };

  changeState = () => {
    this.setState({ stateValue: this.state.stateValue + 1 });
  };

  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div
            className={
              this.state.stateValue % 3 === 0 ? "circle red" : "circle black"
            }
          ></div>
          <div
            className={
              this.state.stateValue % 3 === 2 ? "circle yellow" : "circle black"
            }
          ></div>
          <div
            className={
              this.state.stateValue % 3 === 1 ? "circle green" : "circle black"
            }
          ></div>
        </div>
        <button className="next-state-button" onClick={this.changeState}>
          Next State
        </button>
      </div>
    );
  }
}
