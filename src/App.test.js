import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World, it's me</h1>
        <Weather city="Paris" />
      </header>
    </div>
  );
}

export default App;
