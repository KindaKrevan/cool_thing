export class Weather {
  constructor(data) {
    this.location = data.name;
    this.temp = data.main.temp.toFixed(0);
  }

  get Template() {
    return `
    <span class='weather'> The current temperature in ${this.location} is ${this.temp}°F.</span>`;
  }
}
