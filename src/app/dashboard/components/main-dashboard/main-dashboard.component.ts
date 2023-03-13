import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartsServiceService } from '../../services/charts-service.service';
import { ApexChart, ApexDataLabels, ApexNonAxisChartSeries,ApexAxisChartSeries, ApexTitleSubtitle, ApexGrid, ApexMarkers } from 'ng-apexcharts';
import {ChartComponent,ApexPlotOptions,ApexYAxis,ApexLegend,ApexStroke,ApexXAxis,ApexFill,ApexTooltip} from "ng-apexcharts";
import {ApexResponsive,} from "ng-apexcharts";
import { ToolbarItems } from '@syncfusion/ej2-angular-charts';
import  Highcharts  from "highcharts/highmaps";
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5geodata_data_countries from "@amcharts/amcharts5-geodata/data/countries";
import am5geodata_data_countries2 from "@amcharts/amcharts5-geodata/data/countries2"
import { CountriesData } from 'countries-map';
import HC_map from 'highcharts/modules/map';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {
  
   series: ApexAxisChartSeries;
   series2:ApexAxisChartSeries;
   series3:ApexNonAxisChartSeries;
   chart: ApexChart;
   chart2:ApexChart;
   chart3:ApexChart;
   title:ApexTitleSubtitle;
   title2:ApexTitleSubtitle;
   xAxis:ApexXAxis;
   xAxis2:ApexXAxis;
   yAxis:ApexYAxis;
   yAxis2:ApexYAxis
   plotOptions:ApexPlotOptions;
   plotOptions2:ApexPlotOptions;
   plotOptions3:ApexPlotOptions;
   dataLabels:ApexDataLabels;
   dataLabels2:ApexDataLabels;
   dataLabels3:ApexDataLabels;
   grid:ApexGrid={};
   grid2:ApexGrid={};
   grid3:ApexGrid={};
   fill:ApexFill={};
   fill2:ApexFill;
   fill3:ApexFill;
   legend:ApexLegend={};
   legend2:ApexLegend;
   legend3:ApexLegend;
   responsive: ApexResponsive[]=[];
   labels:any;

  
   Categories:[]=[]

 
  constructor(private chartsService:ChartsServiceService) {
    // pipes Chart 
      this.series= [
        {
          name: "إسطوانة فايبر",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148,100,120,170]
        },
        {
          name:"إسطوانة حديد",
          data:[44, 55, 57, 56, 61, 58, 63, 60, 170,50,80,20]
        },
        
      ],
      this.chart= {
        height: 400,
        type: "bar",
           toolbar: {
      show: true,
    
    },
      },
      this.title= {
        text: "My First Angular Chart"
      },
      this.xAxis = {
        
        categories: ["ديسمبر","نوفمبر","اكتوبر","سبتمبر", "اغسطس",  "يوليو",  "يونيو",  "مايو",  "ابريل",  "مارس",  "فبراير", "يناير"],
        axisTicks: {
          show: false,
          
      },
      labels: {
        show: true,
        
        hideOverlappingLabels: true,
        showDuplicates: false,
        style: {
            fontWeight: 600,
        },
      },
   
      },
      
      this.yAxis={
     opposite:true,
     tickAmount: 10,
      },
      this.plotOptions={
        bar:{
          horizontal: false,
          columnWidth:"70%",
          borderRadius: 8,
          borderRadiusApplication: 'end',

          

        }
      }
      this.dataLabels={
        enabled:false
      }
      this.fill={
        colors:  ['#FDA66C', "#F36100"],
        opacity:1,
      
    
      }
      this.legend={
        show:true,
        position:"top",
        markers: {
          width: 20,
          height: 12,
          radius: 10,
          fillColors: ['#FDA66C', "#F36100"],
          
      },
      onItemClick: {
        toggleDataSeries: false
    },
     
    };

    // Pipes chart 

    // accessories chart 
    this.series2= [
      {
        name: " لي غاز ",
        data: [50, 100, 70, 150, 49, 80, 69, 91, 148,100,120,170]
      },
      {
        name:" منظم إسطوانة ",
        data:[150, 55, 100, 70, 61, 50, 63, 80, 170,50,80,20]
      },
      
    ],
    this.chart2= {
      height: 400,
      type: "bar",
         toolbar: {
    show: true,
  
  },
    },
    this.title2= {
      text: "My First Angular Chart"
    },
    this.xAxis2 = {
      
      categories: ["ديسمبر","نوفمبر","اكتوبر","سبتمبر", "اغسطس",  "يوليو",  "يونيو",  "مايو",  "ابريل",  "مارس",  "فبراير", "يناير"],
      axisTicks: {
        show: false,
        
    },
    labels: {
      show: true,
      
      hideOverlappingLabels: true,
      showDuplicates: false,
      style: {
          fontWeight: 600,
      },
    },
 
    },
    
    this.yAxis2 ={
   opposite:true,
   tickAmount: 10,
    },
    this.plotOptions2={
      bar:{
        horizontal: false,
        columnWidth:"70%",
        borderRadius: 8,
        borderRadiusApplication: 'end',

        

      }
    }
    this.dataLabels2={
      enabled:false
    }
    this.fill2={
      colors:  ['#FDA66C', "#F36100"],
      opacity:1,
    
  
    }
    this.legend2={
      show:true,
      position:"top",
      markers: {
        width: 20,
        height: 12,
        radius: 10,
        fillColors: ['#FDA66C', "#F36100"],
        
    },
    onItemClick: {
      toggleDataSeries: false
  },
   
  };
    // accessories chart 

    // Devices Chart
    this.series3= [
     80,100
     
      
    ],
    this.chart3= {
      
      toolbar: {
        show: true,
        offsetX: -10,
        offsetY: 0,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          customIcons: []
        },
      },
      height: 200,
      type: "donut",
      
   
    },
   
   
    this.plotOptions3={
      pie:{
        donut:{
          labels:{
            show:true,
          }
        }
      }
     
    }
    this.dataLabels3={
      enabled:false
    }
    this.fill3={
      colors:  ["#d8d8d8","#F36100"],
      opacity:1,
    
  
    }
    this.legend3={
      show:true,
      position:"bottom",
      markers: {
        width: 20,
        height: 12,
        radius: 10,
        fillColors:  ["#d8d8d8","#F36100"],
        
    },
    onItemClick: {
      toggleDataSeries: false
  },
  onItemHover:{
    
  }
   
  };
  this.labels=["معطل", "يعمل"]
    // Devices Chart

    // Map Chart


// Map Chart


  }
  

  ngOnInit(){
    this.chartsService.getAllCategory().subscribe({
      next:(data:any)=>{
        console.log(data)
            }
    })


  
  
    // console.log(this.chartsService.headers) 
  }
  

}
