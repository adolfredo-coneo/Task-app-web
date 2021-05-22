import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ListView from "./components/ListView";

function App() {
  return (
    <div className="App">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <ListView />
      </div>
    </div>
  );
}

export default App;
