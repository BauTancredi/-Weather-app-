import React from "react";
import sunny from "../sunny.svg";

const WeatherCard = ({ result }) => {
  const { name } = result;

  if (!name) return null;

  return (
    <div className="card text-center card-transparency m-3">
      <img className="card-img-top img-size" src={sunny} alt="logo" />
      <div className="card-body">
        <h3>{Math.round((result.main.temp - 273.15) * 100) / 100}º</h3>
        <h4>
          {name}, {result.sys.country}
        </h4>
      </div>
    </div>
  );
};

export default WeatherCard;
