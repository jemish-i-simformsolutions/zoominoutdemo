import "./App.css";
import ImageSetUp from "react-zoominout";

function App() {
  return (
    <div className="App">
      <h1>Zoom In Out Demo</h1>
      <ImageSetUp
        src="https://i1.wp.com/static.web-backgrounds.net/uploads/2012/08/City_Landscape_Background.jpg"
        height="200"
        width="300"
      />
    </div>
  );
}

export default App;
