import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicesComponent } from './components/devices/devices.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { OperatorsComponent } from './components/operators/operators.component';
import { StationsMainComponent } from './components/stations-main/stations-main.component';
import {TableModule} from 'primeng/table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AgGridModule } from 'ag-grid-angular';
import { StationPipesSalesComponent } from './components/station-pipes-sales/station-pipes-sales.component';
import { RouterModule,Routes  } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexChart, ApexDataLabels, ApexNonAxisChartSeries,ApexAxisChartSeries, ApexTitleSubtitle, ApexGrid, ApexMarkers } from 'ng-apexcharts';
import {ChartComponent,ApexPlotOptions,ApexYAxis,ApexLegend,ApexStroke,ApexXAxis,ApexFill,ApexTooltip} from "ng-apexcharts";
import { StationDevicesSalesComponent } from './components/station-devices-sales/station-devices-sales.component';
import  {MatCurrencyFormatModule} from 'mat-currency-format';
import { NgxCurrencyModule } from "ngx-currency";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';

const routes : Routes = [
 {path:"all-stations",component:StationsMainComponent},
  {path:"station-pipes-sales",component:StationPipesSalesComponent},
  {path:"station-devices",component: DevicesComponent},
  {path:"station-devices-sales",component:StationDevicesSalesComponent},
  {path:"station-pipes",component: PipesComponent},
  {path:"station-accessories",component: AccessoriesComponent},
]
@NgModule({
  declarations: [
    DevicesComponent,
    PipesComponent,
    AccessoriesComponent,
    OperatorsComponent,
    StationsMainComponent,
    StationPipesSalesComponent,
    StationDevicesSalesComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    NgxDatatableModule,
    AgGridModule,
    RouterModule,
    NgApexchartsModule,
    MatCurrencyFormatModule,
    NgxCurrencyModule,
    ReactiveFormsModule,
    InputNumberModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    AccessoriesComponent,
    DevicesComponent,
    OperatorsComponent,
    PipesComponent,
    StationsMainComponent,
    RouterModule
 
 
   ]
})
export class StationsModule { }
