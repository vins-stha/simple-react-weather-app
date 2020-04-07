import React from "react";

const Weather = (props) => (
	<div className="weather__info">
        <div className="container">
          <div className="cards">
            <h1>City : {props.city}, {props.country} </h1>
          </div>
          <h5 className="py-4">
          <i className={props.icon}></i>
          </h5>
          <h1 className="py-2">{props.temperature} &deg;</h1>
          <h3>
            <span className="py-4">Max >>  </span>
            <span className="py-4"> Min >></span>
          </h3>
          <h4 className="py-3">{props.icon}</h4>
        </div>
        
        

	</div>
);

export default Weather;