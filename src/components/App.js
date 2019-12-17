import React, {Component} from 'react';
import './App.css';
import SearchBar from './SearchBar';
import WeatherInfo from './WeatherInfo';
const APIkey = 'a67f1322578aaa1a1bbea6ca22e0f941'

class App extends Component {
  state = { 
    value: '',
    date: '',
    city: '',
    coordination: '',
    temp: '',
    temp_min: '',
    temp_max: '',
    sunrise: '',
    sunset: '',
    pressure: '',
    humidity: '',
    windspeed: '',
    err: '',
   }
  
  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  

  handleCitySubmit = (e) => {
      e.preventDefault()
      const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIkey}&units=metric&lang=pl`;

      fetch(API)
      .then(response => {
        if(response.ok) {
          return response
        }
        throw Error("Nie udało się pobrać danych!")
      })

      .then(response => response.json())
      .then(data => {
        const time = new Date().toLocaleString()
        this.setState(prevState => ({
          err: false,
          date: time,
          city: prevState.value,
          temp: data.main.temp,
          temp_min: data.main.temp_min,
          temp_max: data.main.temp_max,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          pressure: data.main.pressure,
          humidity: data.main.humidity,
          windspeed: data.wind.speed,
        }))
      })
      .catch(err => {
        console.log(err);
        this.setState(prevState => ({
          err: true,
          city: prevState.value
        }))
      })
  }

  render() { 
    return (
      <div className="app">
        <header className="header" id="header">
          <h1>POGODA</h1>
        </header>
        <WeatherInfo weather={this.state} />
        <SearchBar
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleCitySubmit}
        />
        
        
      </div>
    );
  }
}
 
export default App;