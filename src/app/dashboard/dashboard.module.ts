import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { RouterModule } from '@angular/router';
import {CalendarModule} from 'primeng/calendar';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexChart, ApexDataLabels, ApexNonAxisChartSeries,ApexAxisChartSeries, ApexTitleSubtitle, ApexGrid, ApexMarkers } from 'ng-apexcharts';
import {ChartComponent,ApexPlotOptions,ApexYAxis,ApexLegend,ApexStroke,ApexXAxis,ApexFill,ApexTooltip} from "ng-apexcharts";
import { HighchartsChartModule } from "highcharts-angular";


@NgModule({
  declarations: [
    HeaderComponent,
    MainDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CalendarModule,
    NgApexchartsModule,
    HighchartsChartModule,
  
  ],
  exports:[
    HeaderComponent,
    MainDashboardComponent,
  ]
})
export class DashboardModule {

  
 }
