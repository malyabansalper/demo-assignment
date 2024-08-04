import React, { Component } from "react";

// Base class component
interface BaseProps {
  title: string;
}

class BaseComponent extends Component<BaseProps> {
  logMessage(): void {
    console.log("Hello from BaseComponent");
  }
}

// Derived class component
interface GreetingProps extends BaseProps {}

class Inheritance extends BaseComponent {
  render() {
    this.logMessage();
    return <h1>{this.props.title}</h1>;
  }
}

export default Inheritance;
