export class Forecast {
  morningTemp: string = 'Not Available';
  dayTemp: string = 'Not Available';
  nightTemp: string = 'Not Available';
  humidity: string = 'Not Available';
  dayName: string = 'Not Available';
  foreCastInfo: ForecastInfo;
  weatherImgUrl: string = 'assets/clear-weather.jpg';

  constructor() {
    this.foreCastInfo = new ForecastInfo();
  }
}

class ForecastInfo {
  minValue: string = 'Not Available';
  maxValue: string = 'Not Available';
  meanValue: string = 'Not Available';
  modValue: string = 'Not Available';
}
