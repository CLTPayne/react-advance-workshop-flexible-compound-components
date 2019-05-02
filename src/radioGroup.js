import React, { Component } from "react";
import { RadioGroupContext } from "./radioGroupConsumer";

class RadioGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  select = value => {
    this.setState({ value }, () => {
      this.props.onChange(this.state.value);
    });
  };

  render() {
    return (
      <RadioGroupContext.Provider
        value={{
          value: this.state.value,
          onSelect: this.select
        }}
      >
        {this.props.children}
      </RadioGroupContext.Provider>
    );
  }
}

export default RadioGroup;
