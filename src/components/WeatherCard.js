import React from "react";
import sunny from "../sunny.svg";

const WeatherCard = () => {
  return (
    <div className="card text-center card-transparency m-3">
      <img className="card-img-top img-size" src={sunny} alt="logo" />
      <div className="card-body">
        <h3>20</h3>
        <h4>City, Country</h4>
      </div>
    </div>
  );
};

export default WeatherCard;
