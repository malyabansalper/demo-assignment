import React from "react";
import ApiTask from "./components/api-task";
import UserContainer from "./components/container-presentational/container";
import UserListPresentational from "./components/container-presentational/presentational";
import Button from "./components/js-best-practice/button";
import Encapsulation from "./components/oops/encapsulation";
import Inheritance from "./components/oops/inheritance";
import Polymorphism from "./components/oops/polymorphism";
import UserListHookEg from "./components/react-hook";
import { MockList } from "./constants";
import "./styles.css";

export default function App() {
  const handleClick = () => alert("Button clicked!");

  return (
    <div className="App">
      <h1>Task 1</h1>
      <p>
        1. Apply object-oriented principles in React component design, using ES6
        classes or constructor functions where appropriate.
      </p>
      <hr />
      <>
        <h1>Encapsulation</h1>
        <Encapsulation />
        <hr />
        <h1>Inheritance</h1>
        <Inheritance title="I am title" />
        <hr />
        <h1>Polymorphism</h1>
        <Polymorphism />
        <hr />
      </>
      <p>
        2. Employ a well-considered UI architectural pattern, such as
        Container/Presentational components, or use React hooks to manage logic
        and state.
      </p>
      <>
        <hr />
        <h1>Presentational Component</h1>
        <UserListPresentational users={MockList} />
        <hr />
        <h1>Container Component</h1>
        <UserContainer />
        <hr />
        <h1>React hooks</h1>
        <UserListHookEg />
        <hr />
      </>
      <p>
        3. Write clean, simple, and reusable code utilizing modern JavaScript
        best practices.
      </p>
      <hr />
      <Button label="Click Me" variant="primary" onClick={handleClick} />
      <hr />
      <p>4. API Task</p>
      <hr />
      <ApiTask />
    </div>
  );
}
