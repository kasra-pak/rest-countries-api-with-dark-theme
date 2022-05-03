import React from "react";

import { Link } from "react-router-dom";

export default function Country(props) {
  return (
    <Link to={`/detail/${props.name}`} className="country" >
      <img
        className='country__flag'
        src={props.flag}
        alt={`flag of ${props.name}`}
      />
      <div className="country__info">
        <h3 className="country__name">{props.name}</h3>
        <p className="country__population">
          <b>population: </b>
          {props.population.toLocaleString()}
        </p>
        <p className="country__region">
          <b>region: </b>
          {props.region}
        </p>
        <p className="country__capital">
          <b>capital: </b>
          {props.capital}
        </p>
      </div>
    </Link>
  )
}