import React from "react";
import ColorButton from "./components/ColorButton";

function App() {
  return (
    <>
      <div className="main">
        <ColorButton color="Red" />
        <ColorButton color="Black" />
        <ColorButton color="Green" />
        <ColorButton color="Orange" />
        <ColorButton color="Yellow" />
        <ColorButton color="Brown" />
        <ColorButton color="Pink" />
        <ColorButton color="Purple" />
        <ColorButton color="Cyan" />
      </div>
    </>
  );
}

export default App;
