import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Authentication/Components/login/login.component';
import { MainDashboardComponent } from './dashboard/components/main-dashboard/main-dashboard.component';
import { DevicesComponent } from './stations/components/devices/devices.component';
import { PipesComponent } from './stations/components/pipes/pipes.component';
import { StationDevicesSalesComponent } from './stations/components/station-devices-sales/station-devices-sales.component';
import { StationPipesSalesComponent } from './stations/components/station-pipes-sales/station-pipes-sales.component';
import { StationsMainComponent } from './stations/components/stations-main/stations-main.component';

const routes: Routes = [
  // {path:"", redirectTo:"dashboard",pathMatch:'full'},

  {path:"dashboard",component:MainDashboardComponent},
  {path:"stations",component:StationsMainComponent},
  {path:"station-pipes-sales",component:StationPipesSalesComponent},
  {path:"station-devices",component: DevicesComponent},
  {path:"station-devices-sales",component:StationDevicesSalesComponent},
  {path:"station-pipes",component: PipesComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
