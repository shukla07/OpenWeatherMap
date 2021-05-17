import { Location } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { RouteComponentBase } from 'src/app/core/route-component-base';
import { Forecast } from '../model/forecast.model';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.scss'],
})
export class ForecastCardComponent extends RouteComponentBase {
  forecastList: Forecast[] = [];
  eventSubscription: Subscription | undefined;
  cityName: string = '';

  @Input('city-name')
  cityNameFromParent: Observable<string> | undefined;

  @Output() infoClicked = new EventEmitter();

  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly location: Location,
    private readonly mainService: MainService,
    private readonly snackBar: MatSnackBar
  ) {
    super(route, location);
    this.getWeatherForecastByCityName();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.eventSubscription = this.cityNameFromParent?.subscribe((resp) => {
      this.cityName = resp;
      this.getWeatherForecastByCityName();
    });
  }

  getWeatherForecastByCityName() {
    this._subscriptions.push(
      this.mainService.getDataByCityName(this.cityName).subscribe(
        (resp) => {
          this.forecastList = resp;
          this.snackBar.dismiss();
        },
        (error) => {
          if (error.error.cod === '404') {
            this.snackBar.open(
              `A city named as '${this.cityName}' does not exist.`,
              'Close'
            );
          } else if (error.error.cod === '400') {
            this.snackBar.open(`Please enter a city name.`, 'Close');
          }
        }
      )
    );
  }

  onClickInfo(data: Forecast) {
    this.infoClicked.emit(data);
  }
}
