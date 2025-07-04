
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weatherinfo from './Weatherinfo.js';
import WeatherForecastpreview from './WeatherForecastpreview.js';

function App() {
  
  return (
    <div className="App">
      <header className="App-Logo">
        <a href="https://www.shecodes.io" target="_blank" rel="noopener noreferrer">
          <img className="App-logo" alt="SheCodeslogo" src="https://www.weather.shecodes.io/images/logo.png"/>
        </a>
      </header>
      <main>
        <form>
          <div className="row">
            <div className="col-9">
              <input placeholder='Please enter a city'className="form-control search-input" type="search" id="city-input" autoComplete='on' autoFocus='on'/>
            </div>
            <div className="col-3 p-0">
              <input className="btn btn-primary w-100" type="submit" value="Search"></input>
            </div>
          </div>
        </form>
        <div className="line-break"></div>
        < Weatherinfo />
      <div className="row d-flex flex-row justify-content-center">

          < WeatherForecastpreview data={{
            time: 1719235200,
            temperature: {
            maximum: 26,
            minimum: 18,
            },
            condition: {
            icon: "clear-sky-day"
            }}} />
             < WeatherForecastpreview data={{
            time: 1719235260,
            temperature: {
            maximum: 26,
            minimum: 18,
            },
            condition: {
            icon: "clear-sky-day"
            }}} />
             < WeatherForecastpreview data={{
            time: 1719235280,
            temperature: {
            maximum: 26,
            minimum: 18,
            },
            condition: {
            icon: "clear-sky-day"
            }}} />
             < WeatherForecastpreview data={{
            time: 1719235300,
            temperature: {
            maximum: 26,
            minimum: 18,
            },
            condition: {
            icon: "clear-sky-day"
            }}} />
             < WeatherForecastpreview data={{
            time: 1719235320,
            temperature: {
            maximum: 26,
            minimum: 18,
            },
            condition: {
            icon: "clear-sky-day"
            }}} />

      </div>
      </main>

      <div className="line-break"></div>
      <footer>
      <p className="footer-message"> This project was coded by <a href="https://github.com/elena-miles" target="blank" rel="noopener noreferrer">Elena Miles</a> and is open sourced on <a href="https://github.com/elena-miles/weatherreact3" target="_blank" rel="noopener noreferrer">github</a> and hosted with <a href="https://emweatherreact3.netlify.app/" target="_blank" rel="noopener noreferrer">netlify</a>.</p>
      </footer>
    </div>
  );
}

export default App;
