import React from "react";
import { useContext } from "react";
import { MyContext } from "../context/ṃyContext";

function MyComponent() {
  const { text, setText } = useContext(MyContext);
  return (
    <div>
      <h1 style={{ textAlign: "center", marginLeft: "40vw" }}>{text}</h1>
      <button
        style={{
          textAlign: "center",
          marginLeft: "45vw",
          backgroundColor: "green",
          color: "white",
        }}
        onClick={() => setText("Hello World!🚀")}
      >
        Click Me
      </button>
      <button
        style={{ marginLeft: "10px", backgroundColor: "red", color: "white" }}
        type="button"
        onClick={() => {
          location.reload();
        }}
      >
        Reload Page
      </button>
    </div>
  );
}

export default MyComponent;
