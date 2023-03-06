import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { AgChartsAngularModule } from 'ag-charts-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './Authentication/authentication.module';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { ChartComponent } from '@syncfusion/ej2-angular-charts';
import { CategoryService, LegendService, TooltipService } from '@syncfusion/ej2-angular-charts';
import { DataLabelService, LineSeriesService } from '@syncfusion/ej2-angular-charts';
import { BarSeriesService, ColumnSeriesService, MultiLevelLabelService, SelectionService } from '@syncfusion/ej2-angular-charts';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import { PrimeNGConfig } from 'primeng/api';
import { NgApexchartsModule } from 'ng-apexcharts';
import { StationsModule } from './stations/stations.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    AgGridModule,
    AgChartsAngularModule,
    ChartModule,
    SharedModule,
    DashboardModule,
    BrowserAnimationsModule,
    CalendarModule,
    NgApexchartsModule,
    StationsModule

   
  ],
  providers: [CategoryService, BarSeriesService, ColumnSeriesService, LineSeriesService, LegendService, DataLabelService, MultiLevelLabelService, SelectionService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
