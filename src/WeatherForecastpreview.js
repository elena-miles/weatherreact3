import React from "react";

export default function WeatherForecastpreview(props) {
    if (!props.data) {
          return null;
        }

        function icon() {
          return (
            <WeatherIcon code={props.data.condition.icon} size={38} />
          );
        }

        function day() {
          let date = new Date(props.data.time * 1000);
          let day = date.getDay();
          let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
          return days[day];
        }
      
        function maxTemperature() {
          let temperature = Math.round(props.data.temperature.maximum);
      
          return `${temperature}°`;
        }
      
        function minTemperature() {
          let temperature = Math.round(props.data.temperature.minimum);
      
          return `${temperature}°`;
        }


    return (
            <div className="WeatherForecast row d-flex flex-row justify-content-center"> 
              <div className="col-2">

                <div className="WeatherForecastPreview text-center">
                  <div className="weather-forecast-row row">    
                    <div className="Forecast-time">{day()}</div>
                    <div className="text-center"><WeatherIcon code={props.data.condition.icon} size={38}/></div>
                        <div className="weather-forecast-temperature">
                            <span className="weather-forecast-temperature-max">{maxTemperature()}</span>
                            <span className="weather-forecast-temperature-min">{minTemperature()}</span>
                        </div>
                  </div>
                </div>
              </div>

            </div>
          );
        }
