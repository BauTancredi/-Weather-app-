import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Error from "./components/Error";

function App() {
  const [search, setSearch] = useState({ city: "" });
  const [callApi, setCallApi] = useState(false);
  const [result, setResult] = useState({});
  const [error, setError] = useState(false);

  const { city } = search;

  useEffect(() => {
    const fetchData = async () => {
      if (callApi) {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac8456119b3f1a8f787fc2c61b2ac680`;

        const options = {
          method: "GET",
          url,
        };

        try {
          const result = await axios(options);

          setResult(result.data);
          setCallApi(false);
          setError(false);
        } catch (error) {
          setError(true);
          setCallApi(false);
        }
      }
    };

    fetchData();
    //eslint-disable-next-line
  }, [callApi]);

  let component;
  if (error) {
    component = <Error error={error} />;
  } else {
    component = <WeatherCard result={result} />;
  }

  return (
    <Fragment>
      <h1 className="text-center">Weather App</h1>
      <div className="container">
        <SearchBar
          setSearch={setSearch}
          search={search}
          setCallApi={setCallApi}
        />
      </div>
      {component}
    </Fragment>
  );
}

export default App;
