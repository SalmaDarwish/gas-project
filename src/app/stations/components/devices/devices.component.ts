import { Component } from '@angular/core';
import { Stations } from '../../services/stations/stations';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent {
  readonlyInputs:any=document.getElementsByClassName("readonly");
  rowIndex:number=2;
  confirmDelete:boolean=false;
  disabledSelects:any=document.getElementsByClassName("form-select")
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
  for(let i=0; i<this.disabledSelects.length;i++){
    this.disabledSelects[i].removeAttribute("disabled")
  }
  document.getElementById("edit-btn")?.classList.add("apply-btn");
  
  
}

noneditableForm(){
  console.log("noneditable")
  for(let i=0; i<this.readonlyInputs.length;i++){
    this.readonlyInputs[i].setAttribute("readonly","")
      }
      for(let i=0; i<this.disabledSelects.length;i++){
        this.disabledSelects[i].setAttribute("disabled","true")
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
