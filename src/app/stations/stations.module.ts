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


@NgModule({
  declarations: [
    DevicesComponent,
    PipesComponent,
    AccessoriesComponent,
    OperatorsComponent,
    StationsMainComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    NgxDatatableModule,
    AgGridModule,
  ],
  exports:[
    AccessoriesComponent,
    DevicesComponent,
    OperatorsComponent,
    PipesComponent,
    StationsMainComponent
 
 
   ]
})
export class StationsModule { }
