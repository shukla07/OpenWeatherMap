import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainService } from './service/main.service';
import { ThemeModule } from '../theme/theme.module';
import { GetForecastAdapter } from './adapter/get-forecast.adapter';
import { ForecastCardComponent } from './forecast-card/forecast-card.component';
import { ForecastDialogComponent } from './forecast-dialog/forecast-dialog.component';

@NgModule({
  declarations: [DashboardComponent, ForecastCardComponent, ForecastDialogComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    ThemeModule.forRoot(),
  ],
  providers: [MainService, GetForecastAdapter],
})
export class MainModule {}
