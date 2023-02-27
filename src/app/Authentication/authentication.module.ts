import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AgChartsAngularModule } from 'ag-charts-angular';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { ChartComponent } from '@syncfusion/ej2-angular-charts';
import { CategoryService, LegendService, TooltipService } from '@syncfusion/ej2-angular-charts';
import { DataLabelService, LineSeriesService} from '@syncfusion/ej2-angular-charts';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AgGridModule,
    AgChartsAngularModule,
    ChartModule 
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent

  ]
})
export class AuthenticationModule { }
