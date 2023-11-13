import React from "react";
import GrandChildComponent from "./GrandChildComponent";

function ChildComponent({ message, setMessage }) {
  return (
    <div>
      <h3>Child Component</h3>
      <p>{message}</p>
      <GrandChildComponent message={message} setMessage={setMessage} />
    </div>
  );
}

export default ChildComponent;
