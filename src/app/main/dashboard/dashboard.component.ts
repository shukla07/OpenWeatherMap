import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteComponentBase } from 'src/app/core/route-component-base';
import { MainService } from '../service/main.service';
import * as moment from 'moment';
import { Forecast } from '../model/forecast.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent extends RouteComponentBase {
  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly location: Location,
    private readonly mainService: MainService
  ) {
    super(route, location);
  }
  forecastList: Forecast[] = [];

  ngOnInit() {
    super.ngOnInit();
    this.getWeatherForecastByCityId();
  }

  getWeatherForecastByCityId() {
    this._subscriptions.push(
      this.mainService.getDataByCityName('Agra').subscribe((resp) => {
        this.forecastList = resp;
      })
    );
  }
}
