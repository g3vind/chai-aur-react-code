import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent({ message, setMessage }) {
  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent message={message} setMessage={setMessage} />
    </div>
  );
}

export default ParentComponent;
