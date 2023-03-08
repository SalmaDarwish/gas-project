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
stations:Stations[]=[
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
  document.getElementById("readyonly")?.removeAttribute("")
}
}
