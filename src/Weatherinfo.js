import React from "react";



export default function Weatherinfo() {
    return (
    <div className="Weatherinfo">
    
        <div className="row">
                <div className="col-6">
                <h1 className="displayedcity">London</h1>
                    <ul>
                        <li>
                            <span>Wednesday,</span>
                            <span> 15:00</span>
                        </li>
                        <li><span>Sunny</span></li>
                        <li>Humidity:<strong>40%</strong></li>
                        <li>Wind:<strong>5km/h</strong></li>
                    </ul>
                </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="temperature-container d-flex justify-content-end align-items-center">
                <img className="temperature-icon"
                            src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/01d.png"
                            alt="weather icon"
                            width="52"
                            height="52"
                            target="_blank"
                            rel="noopener noreferrer"/>

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
