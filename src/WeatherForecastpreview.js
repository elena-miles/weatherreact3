import React from "react";

export default function WeatherForecastpreview() {
    return (
            <div className="WeatherForecast row d-flex flex-row justify-content-center"> 
              <div className="col-2">

                <div className="WeatherForecastPreview text-center">
                  <div className="weather-forecast-row row">    
                    <div className="Forecast-time">Mon</div>
                    <canvas width="38px" height="38px"></canvas>
                    <div className="weather-forecast-temperature">
                      <span className="weather-forecast-temperature-max">20°</span>
                      <span className="weather-forecast-temperature-min">15°</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          );
        }
