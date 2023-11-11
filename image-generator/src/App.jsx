import "./index.css";
import RandomImage from "./components/RandomImage";
import TopTenBreed from "./components/TopTenBreed";
// import GetAllBreeds from "./components/GetAllBreeds";

function App() {
  return (
    <>
      <div className="App">
        <h1 style={{ margin: "20px", padding: "10px", fontSize: "40px" }}>
          Image Generator
        </h1>
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "space-evenly",
          }}
        >
          <div>
            {" "}
            <RandomImage />
          </div>
          <div>
            <TopTenBreed />
          </div>
          {/* <GetAllBreeds /> */}
        </div>
      </div>
    </>
  );
}

export default App;
