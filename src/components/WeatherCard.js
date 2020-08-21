import React from "react";

import sunny from "../images/sunny.svg";
import scatteredClouds from "../images/scatteredClouds.svg";
import overcastClouds from "../images/overcastClouds.svg";
import rain from "../images/rain.svg";
import snow from "../images/snow.svg";
import thunderstorm from "../images/thunderstorm.svg";

const WeatherCard = ({ result }) => {
  const { name } = result;
  console.log(result);

  if (!name) return null;

  const weather = result.weather[0].description;

  let imageComponent;
  switch (weather) {
    case "clear sky":
      imageComponent = sunny;
      break;

    case "scattered clouds":
      imageComponent = scatteredClouds;
      break;

    case "overcast clouds":
      imageComponent = overcastClouds;
      break;

    case "rain":
      imageComponent = rain;
      break;

    case "snow":
      imageComponent = snow;
      break;

    case "thunderstorm":
      imageComponent = thunderstorm;
      break;

    default:
      imageComponent = sunny;
      break;
  }

  return (
    <div className="card text-center card-transparency m-3">
      <img className="card-img-top img-size" src={imageComponent} alt="logo" />
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
