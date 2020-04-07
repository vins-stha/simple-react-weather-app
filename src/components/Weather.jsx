import React from "react";
import "./styles/weather.css";

const Weather = (props) => ( 
	<div className="weather_info">
        <div className="container">
   
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
						<div className ="feels_like">Feels like {props.feels}</div>
					</div>
					
					<div className ="icon"></div>

				</div>
			</div>

		</div>
		</div>
        
</div>
	</div>
);

export default Weather;