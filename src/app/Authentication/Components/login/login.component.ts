import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent, QuerySelector } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { CellChangedEvent } from 'ag-grid-community/dist/lib/interfaces/iRowNode';
import { AgChartOptions } from 'ag-charts-community';
import { AgChartsAngularModule } from 'ag-charts-angular';
import {
  AgChartThemeOverrides,
  FirstDataRenderedEvent,
  GridApi,
} from 'ag-grid-community';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class LoginComponent implements OnInit {
  public primaryXAxis: any={};
  public primaryYAxis: any={};
  public chartData: any[]=[];
  public title: string="";
  public legendSettings: any;
  public data: any[]=[];
  public enableRtl :boolean= true;


constructor(private authService:AuthService){}

  ngOnInit(): void {
    this.getData();
    this.enableRtl=true

      this.chartData = [
          { month: 'Jan', sales: 35 , price: 20}, 
          { month: 'Feb', sales: 28 , price: 10 },
          { month: 'Mar', sales: 34  , price: 30}, 
          { month: 'Apr', sales: 32  , price: 50},
          { month: 'May', sales: 40  , price: 80}, 
          { month: 'Jun', sales: 32  , price: 10},
          { month: 'Jul', sales: 35  , price: 50}, 
          { month: 'Aug', sales: 55 , price: 20},
          { month: 'Sep', sales: 38 , price: 28}, 
          { month: 'Oct', sales: 30 , price: 36},
          { month: 'Nov', sales: 25 , price: 50}, 
          { month: 'Dec', sales: 32 , price: 70}
      ];
      this.primaryXAxis = {
          valueType: 'Category',
          title:''
      };
      this.primaryYAxis = {
        minimum: 0, maximum: 80000,
        interval: 20000, title: 'money'

      };
      this.title = 'Olympic Medals';
      this.legendSettings = { visible: false,  toggleVisibility: false };



  }
  getData(): void {
    this.authService.get().subscribe(data => {
      this.data = data.splice(10);
      console.log(data)
    });
  }
  getData2(): void {
      console.log("ello")
      const month=document.querySelector(".first");
      month?.setAttribute("xName","month");
      month?.setAttribute("yName","price")
      const sales=document.querySelector(".second");
      sales?.setAttribute("xName","sales");
      sales?.setAttribute("yName","price");
      this.primaryYAxis['title']="price"
      this.data = this.chartData;

  }

}

