import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartsServiceService } from '../../services/charts-service.service';
import { ApexChart, ApexDataLabels, ApexNonAxisChartSeries,ApexAxisChartSeries, ApexTitleSubtitle, ApexGrid, ApexMarkers } from 'ng-apexcharts';
import {ChartComponent,ApexPlotOptions,ApexYAxis,ApexLegend,ApexStroke,ApexXAxis,ApexFill,ApexTooltip} from "ng-apexcharts";


@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {
  
   series: ApexAxisChartSeries;
   chart: ApexChart;
   title:ApexTitleSubtitle;
   xAxis:ApexXAxis;
   yAxis:ApexYAxis;
   plotOptions:ApexPlotOptions;
   dataLabels:ApexDataLabels;
 
  constructor(private chartsService:ChartsServiceService) {
    
    
      this.series= [
        {
          name: "My-series",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      this.chart= {
        height: 400,
        type: "bar"
      },
      this.title= {
        text: "My First Angular Chart"
      },
      this.xAxis = {
        categories: ["ديسمبر","نوفمبر","اكتوبر","سبتمبر", "اغسطس",  "يوليو",  "يونيو",  "مايو",  "ابريل",  "مارس",  "فبراير", "يناير"]
      },
      this.yAxis={
     opposite:true
      },
      this.plotOptions={
        bar:{
          columnWidth:"40%",
        
        }
      }
      this.dataLabels={
        enabled:false
      }
    };
  
  

  ngOnInit():void {
   
  }
  

}
