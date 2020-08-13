import React from "react";
import sunny from "../sunny.svg";

const ForecastCard = () => {
  return (
    <div className="card text-center card-transparency m-3">
      <h3>Monday</h3>
      <img className="card-img-top img-size" src={sunny} alt="logo" />
      <div className="card-body d-flex justify-content-around">
        <div className="mr-5">
          <h4>Min</h4>
          <h4>15</h4>
        </div>
        <div>
          <h4>Max</h4>
          <h4>30</h4>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
