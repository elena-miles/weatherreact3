import React from "react";

export default function Weatherinfo() {
    return (
    <div className="Weatherinfo">
    
        <div className="row">
                <div className="col-6">
                <h1 className="displayedcity">London</h1>
                    <ul>
                        <li> <span>Monday</span> <span>15:00</span> ,<span>Sunny</span></li>
                        <li> <span>Humidity:<strong>40%</strong></span>,<span>Wind:<strong>5km/h</strong></span></li>
                    </ul>
                </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="temperature-container flex-row d-flex justify-content-end align-items-center">
                    <img src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" alt="Weather icon" className="weather-icon" />
                    
                    <div>
                        <span className="temperature">18</span>
                        <span className="unit">°C</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
