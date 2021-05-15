import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnyAdapter } from 'src/app/core/api/adapters/any-adapter.service';
import { ApiService } from 'src/app/core/api/api.service';
import { GetForecastAdapter } from '../adapter/get-forecast.adapter';
import { GetDataByCityIdCommand } from '../command/get-data-by-cityId.command';

@Injectable()
export class MainService {
  constructor(
    private readonly apiService: ApiService,
    private readonly forecastAdapter: GetForecastAdapter
  ) {}

  getDataByCityName(cityName: string): Observable<any> {
    const command: GetDataByCityIdCommand<any> = new GetDataByCityIdCommand(
      this.apiService,
      this.forecastAdapter,
      cityName
    );

    return command.execute();
  }
}
