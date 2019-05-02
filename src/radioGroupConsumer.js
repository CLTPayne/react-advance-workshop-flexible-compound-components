import React from "react";

export const RadioGroupContext = React.createContext();

const RadioGroupConsumer = props => {
  return (
    <RadioGroupContext.Consumer {...props}>
      {context => {
        if (!context) {
          throw new Error(`Whooooops, you can't render this!`);
        }
        return props.children(context);
      }}
    </RadioGroupContext.Consumer>
  );
};

export default RadioGroupConsumer;
