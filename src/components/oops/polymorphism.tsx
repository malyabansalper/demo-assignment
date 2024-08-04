import React, { Component } from "react";

// Base class component
interface ButtonProps {
  label: string;
}

class Button extends Component<ButtonProps> {
  render() {
    return <button>{this.props.label}</button>;
  }
}

// Derived class component
interface SubmitButtonProps extends ButtonProps {}

class SubmitButton extends Button {
  render() {
    return (
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {this.props.label}
      </button>
    );
  }
}

// Another derived class component
interface CancelButtonProps extends ButtonProps {}

class CancelButton extends Button {
  render() {
    return (
      <button style={{ backgroundColor: "red", color: "white" }}>
        {this.props.label}
      </button>
    );
  }
}

// Usage
const Polymorphism = () => {
  return (
    <div>
      <SubmitButton label="Submit" />
      <CancelButton label="Cancel" />
    </div>
  );
};

export default Polymorphism;
