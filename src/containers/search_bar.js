import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions";

const SearchBar = props => {
  const [term, setTerm] = useState("");

  const onInputChange = event => {
    // Set the state of term to the event target value
    setTerm(event.target.value);
  };

  const onFormSubmit = event => {
    event.preventDefault();
    // Go and search for weather data
    props.fetchWeather(term);
    setTerm("");
  };

  return (
    <form onSubmit={e => onFormSubmit(e)} className="input-group">
      <input
        className="form-control"
        placeholder="Get 5-day forecast in your city"
        value={term}
        onChange={e => onInputChange(e)}
      />
      <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </span>
    </form>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
