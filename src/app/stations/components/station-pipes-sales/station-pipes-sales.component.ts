import { Component } from '@angular/core';
import { ApexAxisChartSeries, ApexNonAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexXAxis, ApexYAxis, ApexPlotOptions, ApexDataLabels, ApexGrid, ApexFill, ApexLegend, ApexResponsive } from 'ng-apexcharts';
import { ChartsServiceService } from 'src/app/dashboard/services/charts-service.service';

@Component({
  selector: 'app-station-pipes-sales',
  templateUrl: './station-pipes-sales.component.html',
  styleUrls: ['./station-pipes-sales.component.scss']
})
export class StationPipesSalesComponent {
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

 }
 
}
