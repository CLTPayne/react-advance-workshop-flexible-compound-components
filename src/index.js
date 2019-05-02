import React, { Component } from "react";
import ReactDOM from "react-dom";
import RadioGroup from "./radioGroup";
import RadioGroupConsumer from "./radioGroupConsumer";
import RadioOption from "./radioOption";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radioValue: "React"
    };
  }

  render() {
    return (
      <div>
        <div>Hiiiii</div>
        <h3>
          Here is a list of stuff that uses a compound component that uses:{" "}
          {this.state.radioValue}
        </h3>
        <RadioGroup onChange={radioValue => this.setState({ radioValue })}>
          <RadioGroupConsumer>
            {({ value, onSelect }) => (
              <div>
                <RadioOption
                  value="React"
                  onClick={() => onSelect("React")}
                  isSelected={value === "React"}
                >
                  React
                </RadioOption>
              </div>
            )}
          </RadioGroupConsumer>
          <RadioGroupConsumer>
            {({ value, onSelect }) => (
              <div>
                <RadioOption
                  value="CSS"
                  onClick={() => onSelect("CSS")}
                  isSelected={value === "CSS"}
                >
                  CSS
                </RadioOption>
              </div>
            )}
          </RadioGroupConsumer>
          <RadioGroupConsumer>
            {({ value, onSelect }) => (
              <div>
                <RadioOption
                  value="Kittens"
                  onClick={() => onSelect("Kittens")}
                  isSelected={value === "Kittens"}
                >
                  Kittens
                </RadioOption>
              </div>
            )}
          </RadioGroupConsumer>
        </RadioGroup>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
