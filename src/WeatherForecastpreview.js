import React from "react";

export default function WeatherForecastpreview(props) {
  if (!props.data) {
    return null;
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
            <div className="WeatherForecast col-2"> 
              <div className="text-center">

                <div className="WeatherForecastPreview text-center">
                  <div className="weather-forecast-row row">    
                    <div className="Forecast-time">{day()}</div>
                    <div className="text-center"><img src={`https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.condition.icon}.png`} width="38" alt="icon"/></div>
                        <div className="weather-forecast-temperature ">
                           
                            <span className="weather-forecast-temperature-max col-6 text-start">{maxTemperature()}</span>
                    
                
                            <span className="weather-forecast-temperature-min col-6 text-end">{minTemperature()}</span>
                          
                        </div>
                  </div>
                </div>
              </div>

            </div>
          );
        }
