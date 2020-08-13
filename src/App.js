import React from "react";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";

function App() {
  return (
    <div>
      <h1 className="text-center">Weather App</h1>
      <div className="container">
        <SearchBar />
      </div>
      <div className="d-flex justify-content-center">
        <h2 className="mr-5">Forecast</h2>
        <h2>Actual Time</h2>
      </div>
      {/* <WeatherCard /> */}
      <div className="container forecast ">
        <div className="row justify-content-center ">
          <div className="col-lg-2">
            <ForecastCard />
          </div>
          <div className="col-lg-2">
            <ForecastCard />
          </div>
          <div className="col-lg-2">
            <ForecastCard />
          </div>
          <div className="col-lg-2">
            <ForecastCard />
          </div>
          <div className="col-lg-2">
            <ForecastCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
