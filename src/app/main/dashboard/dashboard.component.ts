import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteComponentBase } from 'src/app/core/route-component-base';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { Forecast } from '../model/forecast.model';
import { MatDialog } from '@angular/material/dialog';
import { ForecastDialogComponent } from '../forecast-dialog/forecast-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent extends RouteComponentBase {
  cityName: string = 'Agra';
  form = new FormGroup({});
  emitCityNameToChild: Subject<string> = new Subject<string>();

  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly location: Location,
    private readonly formBuilder: FormBuilder,
    private readonly dialog: MatDialog
  ) {
    super(route, location);
  }

  ngOnInit() {
    super.ngOnInit();
    this.form = this.formBuilder.group({
      cityName: [''],
    });
  }

  getCityForecast() {
    this.emitCityNameToChild.next(this.form.value.cityName);
  }

  showForecastInfo(data: Forecast) {
    this.dialog.open(ForecastDialogComponent, {
      data: data,
    });
  }
}
