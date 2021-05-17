import * as moment from 'moment';
import { IAdapter } from 'src/app/core/api/adapters/i-adapter';
import { Forecast } from '../model/forecast.model';
import * as _ from 'lodash';

export class GetForecastAdapter implements IAdapter<Forecast> {
  adaptToModel(resp: any): Forecast {
    const dayWiseData = _.chunk(resp.list, 8);
    const fiveDayForecast: any = [];
    dayWiseData.forEach((ele) => {
      const singleDayData = new Forecast();
      this.setForecastStats(ele, singleDayData);
      this.setWeatherImgUrl(ele, singleDayData);
      ele.forEach((day: any) => {
        this.setTempBasedOnTime(day, singleDayData);
        singleDayData.humidity = day.main.humidity;
        singleDayData.dayName = moment(day.dt_txt).format('dddd, MM/DD/yyyy');
      });
      fiveDayForecast.push(singleDayData);
    });
    return fiveDayForecast;
  }
  adaptFromModel(data: Partial<Forecast>) {
    return data;
  }

  setTempBasedOnTime(day: any, singleDayData: Forecast) {
    switch (moment(day.dt_txt).format('HH:mm')) {
      case '06:00':
        singleDayData.morningTemp = `${(Number(day.main.temp) - 273).toFixed(
          0
        )}`; //Kelvin to Celsius Conversion
        break;
      case '15:00':
        singleDayData.dayTemp = `${(Number(day.main.temp) - 273).toFixed(0)}`;
        break;
      case '21:00':
        singleDayData.nightTemp = `${(Number(day.main.temp) - 273).toFixed(0)}`;
        break;
    }
  }

  setForecastStats(arr: any, singleDayData: any) {
    const tempArr = arr.map((ele: any) => ele.main.temp);
    singleDayData.foreCastInfo.minValue = `${(
      Math.min(...tempArr) - 273
    ).toFixed(0)}`;
    singleDayData.foreCastInfo.maxValue = `${(
      Math.max(...tempArr) - 273
    ).toFixed(0)}`;
    singleDayData.foreCastInfo.meanValue = `${(
      _.sum(tempArr) / tempArr.length -
      273
    ).toFixed(0)}`;
  }

  setWeatherImgUrl(arr: any, singleDayData: any) {
    const weatherArr = arr.map((ele: any) => ele.weather[0].main);
    switch (_.head(_(weatherArr).countBy().entries().maxBy(_.last))) {
      case 'Clear':
        singleDayData.weatherImgUrl = 'assets/clear-weather.jpg';
        break;
      case 'Rain':
        singleDayData.weatherImgUrl = 'assets/rainy-weather.jpg';
        break;
      case 'Clouds':
        singleDayData.weatherImgUrl = 'assets/cloudy-weather.jpg';
        break;
    }
  }
}
