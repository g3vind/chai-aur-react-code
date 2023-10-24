import { useState, React } from "react";
// importing the context object
import { MyContext } from "./context/ṃyContext";
// importing the component
import MyComponent from "./components/MyComponent";
function App() {
  const [text, setText] = useState("");
  return (
    <>
      <div>
        <MyContext.Provider value={{ text, setText }}>
          <MyComponent />
        </MyContext.Provider>
      </div>
    </>
  );
}

export default App;
