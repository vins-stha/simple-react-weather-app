
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import Weather from "./components/Weather";
import 'weather-icons-master/css/weather-icons.css';

const API_KEY = "5df1ef71e943371ccfad58308a322d8b";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      temperature: undefined,
      min : undefined,
      max : undefined,
      feels : undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined,
      icon:undefined
    }
    this.getWeather();
  }

  getWeather = async (event) => { 
 
    const city ="Helsinki";
    const country = "Finland";
 //   event.preventDefault();
//    const city = event.target.elements.city.value;
  //  const country = event.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);//alert(api_call);
    const data = await api_call.json();
    console.log(" dfta "+JSON.stringify(data));
    // if (city && country) {
      this.setState({
        temperature: data.main.temp,
        min: data.main.temp_min,
        max: data.main.temp_max,
        feels : data.main.feels_like,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon : data.weather.icon,
        error: ""
      });
    // } else {
    //   this.setState({
    //     temperature: undefined,
    //     city: undefined,
    //     country: undefined,
    //     humidity: undefined,
    //     description: undefined,
    //     error: "Please enter the values."
    //   });
    //}
  }
  render() {
    return (
      <div>
        <Form getWeather = {this.getWeather}></Form>
        <Weather 
          city = {this.state.city} 
          country = {this.state.country} 
          icon = {this.state.icon} 
          temp = {this.state.temperature }
          description = { this.state.description}
          min = {this.state.min}
          max = {this.state.max}
          feels = {this.state.feels}

          />


      </div>
    );
  }
};

export default App;

