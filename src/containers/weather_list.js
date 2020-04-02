import React from "react";
import { connect } from "react-redux";

const renderWeather = cityData => {
  const name = cityData.city.name;
  const temps = cityData.list[0].main.temp;
  const pressure = cityData.list[0].main.pressure;
  const humidity = cityData.list[0].main.humidity;
  return (
    <tr key={name}>
      <td>{name}</td>
      <td>{temps}</td>
      <td>{pressure}</td>
      <td>{humidity}</td>
    </tr>
  );
};

const WeatherList = props => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>City</th>
          <th>Temp</th>
          <th>Pressure</th>
          <th>Humidity</th>
        </tr>
      </thead>
      <tbody>{props.weather.map(renderWeather)}</tbody>
    </table>
  );
};

function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);
