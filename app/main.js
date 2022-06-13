import { ImageController } from './Controllers/ImageController.js';
import { QuoteController } from './Controllers/QuoteController.js';
import { WeatherController } from './Controllers/WeatherController.js';

class App {
  weatherController = new WeatherController();
  quoteController = new QuoteController();
  imageController = new ImageController();
}

window['app'] = new App();
