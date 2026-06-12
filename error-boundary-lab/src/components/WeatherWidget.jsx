import { useEffect, useState } from "react";


function WeatherWidget({ crash }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=47.61&longitude=-122.33&current=temperature_2m"
    )
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }, []);

  if (crash) {
    throw new Error("Weather API returned corrupted data");
  }

  if (!weather) {
    return <p>Loading weather...</p>;
  }

  return (
    <div className="card">
      <h3> 🌤️ Weather Widget</h3>
      <p>Temperature: {weather.current.temperature_2m}°C</p>
    </div>
  );
}

export default WeatherWidget;