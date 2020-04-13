
import React from "react";

const Form = props => (
	<div className = "container">
	<form onSubmit = {props.getWeather} className  ="find-location">
		<input type="text" name="city" placeholder="City..."/>
		<button>Get Weather</button>
	</form>
	</div>
);

export default Form;