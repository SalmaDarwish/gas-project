import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SpinnerComponent,
    SideBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
   SpinnerComponent,
   SideBarComponent,


  ]
})
export class SharedModule { }
