import React from "react";
import "./styles/weather.css";

const Weather = (props) => ( 
	<div className="weather_info">
        <div className="container">
   
		<div className ="weather_info">
		<div className ="weather_container">
			<div className="unit_forcast">
				<div className="day_date_header">
					<div className="day"></div>
					<div className="date">{props.date}</div>
				</div>
				<div className ="weather_data">
					<div className = "location">{props.city}, {props.country}</div>
					<div className ="temperature">{props.temp} &deg; C </div>
					<div className ="maxMin">
						<div className ="max">Max.   <span className="nums">{props.max}&deg; C</span></div>
						<div className ="min">Min.   <span className="nums">{props.min}&deg; C</span></div>
						<div className ="feels_like">Feels like <span className="nums">{props.feels}&deg; C</span> </div>
					</div>
					<div className ="desc nums" >{props.description}</div>
					<div className ="icon"></div>

				</div>
			</div>

		</div>
		</div>
        
</div>
	</div>
);

export default Weather;