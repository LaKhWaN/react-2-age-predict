import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  let [predictedAge, setPredictedAge] = useState("");
  let [name, setName] = useState("");
  let [count, setCount] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const predictAgeBtn = () => {
    const url = "https://api.agify.io/?name=" + name;
    Axios.get(url).then((res) => {
      setPredictedAge(res.data.age);
      setCount(res.data.count);
    });
  };

  useEffect(() => {
    predictAgeBtn();
  }, []);

  return (
    <div className="App">
      <h1>Age Predictor - API Practice</h1>
      <input onChange={handleChange} placeholder="Enter your name"></input>
      <button onClick={predictAgeBtn} className="catFactBtn">
        Predict 🤔
      </button>
      <div className="fact">
        <h1>
          Your Name is, <strong>{name} 😀</strong>
        </h1>
        <h1>
          and I guess you are, <strong>{predictedAge} years old.</strong>
        </h1>
        <h1>
          Count: <strong>{count}</strong>
        </h1>
      </div>
    </div>
  );
}

export default App;
