import { useState } from "react";
import { Navbar } from "./components";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <h1>Rui</h1>
    </div>
  );
}

export default App;
