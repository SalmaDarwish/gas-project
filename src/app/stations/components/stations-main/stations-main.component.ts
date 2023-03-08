import { Component } from '@angular/core';
import { Stations } from '../../services/stations/stations';
// import { ColumnMode, SelectionType } from 'projects/swimlane/ngx-datatable/src/public-api';
import {
  ColDef,
  FirstDataRenderedEvent,
  GridReadyEvent,
  IRowNode,
  IsRowSelectable,
} from 'ag-grid-community';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';
import { HttpClient } from '@angular/common/http';
// import 'ag-grid-enterprise';
@Component({
  selector: 'app-stations-main',
  templateUrl: './stations-main.component.html',
  styleUrls: ['./stations-main.component.scss']
})
export class StationsMainComponent {
  readonlyInputs:any=document.getElementsByClassName("readonly");
  rowIndex:number=2;
  confirmDelete:boolean=false;
stations:Stations[]=[
  {
    id:"#ndada",
    name:" 1 محطة الرياض",
    city:'الرياض',
    devices:3,
    operators:40,
    status:"معطلة"
  },
  {
    id:"#ndada",
    name:" 2 محطة الرياض",
    city:'الرياض',
    devices:3,
    operators:40,
    status:"معطلة"
  },
  {
    id:"#ndada",
    name:"3 محطة الرياض",
    city:'الرياض',
    devices:3,
    operators:40,
    status:"معطلة"
  },
  {
    id:"#ndada",
    name:"4 محطة الرياض",
    city:'الرياض',
    devices:3,
    operators:40,
    status:"معطلة"
  },
  {
    id:"#ndada",
    name:"محطة الرياض",
    city:'الرياض',
    devices:3,
    operators:40,
    status:"معطلة"
  },
  {
    id:"#ndada",
    name:"محطة الرياض",
    city:'الرياض',
    devices:3,
    operators:40,
    status:"معطلة"
  },
  {
    id:"#ndada",
    name:"محطة الرياض",
    city:'الرياض',
    devices:3,
    operators:40,
    status:"معطلة"
  },
  {
    id:"#ndada",
    name:"محطة الرياض",
    city:'الرياض',
    devices:3,
    operators:40,
    status:"معطلة"
  },
  {
    id:"#ndada",
    name:"محطة الرياض",
    city:'الرياض',
    devices:3,
    operators:40,
    status:"معطلة"
  },
  {
    id:"#ndada",
    name:"محطة الرياض",
    city:'الرياض',
    devices:3,
    operators:40,
    status:"معطلة"
  },
  {
    id:"#ndada",
    name:"محطة الرياض",
    city:'الرياض',
    devices:3,
    operators:40,
    status:"معطلة"
  },
  {
    id:"#ndada",
    name:"محطة الرياض",
    city:'الرياض',
    devices:3,
    operators:40,
    status:"معطلة"
  },
  {
    id:"#ndada",
    name:"محطة الرياض",
    city:'الرياض',
    devices:3,
    operators:40,
    status:"معطلة"
  },
  {
    id:"#ndada",
    name:"محطة الرياض",
    city:'الرياض',
    devices:3,
    operators:40,
    status:"معطلة"
  }
]
selectedStations:Stations[]=[]


editableForm(){
  

  for(let i=0; i<this.readonlyInputs.length;i++){
this.readonlyInputs[i].removeAttribute("readonly")
  }
  document.getElementById("edit-btn")?.classList.add("apply-btn")
}

noneditableForm(){
  console.log("noneditable")
  for(let i=0; i<this.readonlyInputs.length;i++){
    this.readonlyInputs[i].setAttribute("readonly","")
      }
      document.getElementById("edit-btn")?.classList.remove("apply-btn")

}
delete(row: number){
  if(this.confirmDelete){
    
    this.stations.splice(row,1);
  }
  this.rowIndex=row 
  this.confirmDelete=false

}
yesDelete(){
this.confirmDelete=true;
this.delete(this.rowIndex)}
}
