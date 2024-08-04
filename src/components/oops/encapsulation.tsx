import React, { Component } from "react";

interface CounterState {
  count: number;
}

interface CounterProps {
  initialCount?: number;
}

class Encapsulation extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: props.initialCount || 0,
    };
  }

  increment = (): void => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrement = (): void => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Encapsulation;
