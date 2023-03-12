import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Stations } from '../../services/stations/stations';



@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {
price:any=null
  formattedAmount:any="";
  amount:any="";
  readonlyInputs:any=document.getElementsByClassName("readonly");
  rowIndex:number=2;
  confirmDelete:boolean=false;
  disabledSelects:any=document.getElementsByClassName("form-select")
  inputs:any=document.getElementsByClassName("p-inputtext")
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
  for(let i=0; i<this.inputs.length;i++){
    this.inputs[i].removeAttribute("disabled")
      }
  document.getElementById("edit-btn")?.classList.add("apply-btn");
  document.getElementById("price")?.setAttribute("ng-reflect-is-disabled","false");
  
  
  
}
clearField(){
  this.price=null
}
noneditableForm(){
  console.log("noneditable")
  for(let i=0; i<this.readonlyInputs.length;i++){
    this.readonlyInputs[i].setAttribute("readonly","")
      }
      for(let i=0; i<this.disabledSelects.length;i++){
        this.disabledSelects[i].setAttribute("disabled","true")
      }
      for(let i=0; i<this.inputs.length;i++){
        this.inputs[i].setAttribute("disabled","")
          }
      document.getElementById("edit-btn")?.classList.remove("apply-btn")
      document.getElementById("price")?.setAttribute("ng-reflect-is-disabled","true");

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
