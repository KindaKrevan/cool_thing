import { ProxyState } from '../AppState.js';
import { weatherService } from '../Services/WeatherService.js';

function _drawWeather() {
  document.getElementById('weather').innerHTML = ProxyState.weather.Template;
}

export class WeatherController {
  constructor() {
    weatherService.getWeather();
    ProxyState.on('weather', _drawWeather)
  }
}
