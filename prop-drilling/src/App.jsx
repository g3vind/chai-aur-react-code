import React, { useState } from "react";
import ParentComponent from "./components/ParentComponent";

function App() {
  const [message, setMessage] = useState("Hello from App Component");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>App Component</h1>
      <ParentComponent message={message} setMessage={setMessage} />
    </div>
  );
}

export default App;
