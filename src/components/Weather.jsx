import React from "react";
import "./styles/weather.css";

const Weather = (props) => ( 
	<div className="weather_info">
        <div className="container">
          <div className="cards">
            <h1>City : {props.city}, {props.country} </h1>
          </div>
		  <h4 className="py-3">{props.description}</h4>
          <h5 className="py-4">
          <i className={props.icon}></i>
          </h5>
          <h1 className="py-2">{props.temp} &deg;</h1>
          <h3>
            <span className="py-4">Max >> {props.max}  </span>
			<span className="py-4"> Min >> { props.min} </span>
			<span className="py-4"> Feels like >> { props.feels} </span>
          </h3>
          <h4 className="py-3">{props.icon}</h4>
		  
        </div>
		<div className ="weather_info">
		<div className ="weather_container">
			<div className="unit_forcast">
				<div className="day_date_header">
					<div className="day">Monday</div>
					<div className="date">Date</div>
				</div>
				<div className ="weather_data">
					<div className = "location">{props.city}, {props.country}</div>
					<div className ="temperature">{props.temp} &deg; C </div>
					<div className ="maxMin">
						<div className ="max">Max. {props.max}YY</div>
						<div className ="min">Min. {props.min}ZZ</div>
						<div className ="feels_like">Feels like {props.feels}XX</div>
					</div>
					
					<div className ="icon">icon</div>

				</div>
			</div>

		</div>
		</div>
        

	</div>
);

export default Weather;