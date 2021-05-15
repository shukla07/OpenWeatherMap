import * as moment from 'moment';
import { IAdapter } from 'src/app/core/api/adapters/i-adapter';
import { Forecast } from '../model/forecast.model';
import * as _ from 'lodash';
import { single } from 'rxjs/operators';

export class GetForecastAdapter implements IAdapter<Forecast> {
  adaptToModel(resp: any): Forecast {
    const dayWiseData = _.chunk(resp.list, 8);
    const fiveDayForecast: any = [];
    dayWiseData.forEach((ele) => {
      const singleDayData = new Forecast();
      ele.forEach((day: any) => {
        this.setTempBasedOnTime(day, singleDayData);
        singleDayData.humidity = day.main.humidity;
        singleDayData.foreCastInfo.minValue = day.main.temp_min;
        singleDayData.foreCastInfo.maxValue = day.main.temp_max;
        singleDayData.dayName = moment(day.dt_txt).format('dddd, MM/DD/yyyy');
      });
      fiveDayForecast.push(singleDayData);
    });
    console.log(fiveDayForecast);
    return fiveDayForecast;
  }
  adaptFromModel(data: Partial<Forecast>) {
    throw new Error('Method not implemented.');
  }

  setTempBasedOnTime(day: any, singleDayData: Forecast) {
    switch (moment(day.dt_txt).format('HH:mm')) {
      case '06:00':
        singleDayData.morningTemp = `${(Number(day.main.temp) - 273).toFixed(
          0
        )}`;
        break;
      case '15:00':
        singleDayData.dayTemp = `${(Number(day.main.temp) - 273).toFixed(0)}`;
        break;
      case '21:00':
        singleDayData.nightTemp = `${(Number(day.main.temp) - 273).toFixed(0)}`;
        break;
    }
  }
}
