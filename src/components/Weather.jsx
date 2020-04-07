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
        
        
	 {/* {	
	 	props.city && props.country && <p className="weather__key"> Location: 
	 		<span className="weather__value"> { props.city }, { props.country }</span>
	 	</p> 
	 }
	 { 	
	 	props.temperature && <p className="weather__key"> Temperature: 
	 		<span className="weather__value"> { props.temperature }	</span>
	 	</p> 
	 }
	 { 	
	 	props.humidity && <p className="weather__key"> Humidity: 
	 		<span className="weather__value"> { props.humidity } </span>
	 	</p> 
	 }
	 { 	
	 	props.description && <p className="weather__key"> Conditions: 
	 		<span className="weather__value"> { props.description } </span>
	 </p> 
	 }
	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 } */}
	</div>
);

export default Weather;