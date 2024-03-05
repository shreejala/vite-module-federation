import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "remoteApp/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Host app</h2>

      <Button title="Host press" onClick={() => console.log("clicked here")} />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
