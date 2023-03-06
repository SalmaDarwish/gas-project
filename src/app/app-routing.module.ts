import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Authentication/Components/login/login.component';
import { MainDashboardComponent } from './dashboard/components/main-dashboard/main-dashboard.component';
import { StationsMainComponent } from './stations/components/stations-main/stations-main.component';

const routes: Routes = [
  // {path:"", redirectTo:"dashboard",pathMatch:'full'},

  {path:"dashboard",component:MainDashboardComponent},
  {path:"stations",component:StationsMainComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
