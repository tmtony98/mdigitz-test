import { useState } from "react";
import "./App.css";

function App() {
  //
  const [countValue, setCountValue] = useState(0);

  const incrementFn = () => {

    setCountValue(countValue + 1);
  };

  const DecrementFn = () => {
    setCountValue(countValue - 1);
  };


  return (
    <div className="App">
      <h1 className="mt-5 pt-5">Counter App : {countValue}</h1>

      <div className="btns mt-4">
        <button className="btn btn-primary " onClick={incrementFn}>Increment</button>{" "}
        <button className="btn-danger btn mx-2" onClick={DecrementFn}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
