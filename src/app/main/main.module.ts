import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GridComponent } from './grid/grid.component';
import { MainService } from './service/main.service';
import { AgGridModule } from 'ag-grid-angular';
import { ThemeModule } from '../theme/theme.module';
import { GetForecastAdapter } from './adapter/get-forecast.adapter';

@NgModule({
  declarations: [DashboardComponent, GridComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    AgGridModule.withComponents([]),
    ThemeModule.forRoot(),
  ],
  providers: [MainService, GetForecastAdapter],
})
export class MainModule {}
