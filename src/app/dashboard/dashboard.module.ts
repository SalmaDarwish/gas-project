import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { RouterModule } from '@angular/router';
import {CalendarModule} from 'primeng/calendar';
import { TabViewModule } from 'primeng/tabview';
import { FormsModule } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    HeaderComponent,
    MainDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CalendarModule,
    DropdownModule
  ],
  exports:[
    HeaderComponent,
    MainDashboardComponent,
  ]
})
export class DashboardModule { }
