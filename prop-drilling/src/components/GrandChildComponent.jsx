import React from "react";

function GrandChildComponent({ message, setMessage }) {
  return (
    <div>
      <h4>GrandChild Component</h4>
      <button onClick={() => setMessage("Hello From GrandChild Compoment")}>
        Update Message
      </button>
    </div>
  );
}

export default GrandChildComponent;
