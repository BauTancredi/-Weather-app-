import React from "react";

import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <h1 className="text-center">Weather App</h1>
      <div className="container">
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
