
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import Weather from "./components/Weather";
import 'weather-icons-master/css/weather-icons.css';

const API_KEY = "5df1ef71e943371ccfad58308a322d8b";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      date :undefined,
      day : undefined,
      temperature: undefined,
      min: undefined,
      max: undefined,
      feels: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: false,
      icon: undefined,
      error_message: undefined
    }
    this.getWeather();
  }

  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value === "" ? "Helsinki" : event.target.elements.city.value;
    const country = event.target.elements.city.value === "" ? "Finland" : event.target.elements.city.value;

    try {
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);//alert(api_call);
      const data = await api_call.json();
    
      if (data.cod == 404) {
        this.setState({
          city: city,
          error: true,
          error_message: data.message
        })
        throw Error(data.message);
      }
      else {
        this.setState(
          {
            date : new Date().toDateString(),
          
            temperature: data.main.temp,
            min: data.main.temp_min,
            max: data.main.temp_max,
            feels: data.main.feels_like,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            icon: data.weather.icon,
            error: false
          }, console.log('this.state.error else after==>' + this.state.error));

      }

    } catch (error) {
      console.log("error is " + error.message);
    }


  }
  render() {
    if (this.state.error) {
   
      return <h1> Error occured :  {this.state.city} : {this.state.error_message}</h1>;

    } else {
      return (
        <div className="container_main">
          <Form getWeather={this.getWeather}></Form>
          <Weather
            city={this.state.city}
            country={this.state.country}
            icon={this.state.icon}
            temp={this.state.temperature}
            description={this.state.description}
            min={this.state.min}
            max={this.state.max}
            feels={this.state.feels}
            date = {this.state.date}

          />


        </div>
      );
    }

  }
};

export default App;

