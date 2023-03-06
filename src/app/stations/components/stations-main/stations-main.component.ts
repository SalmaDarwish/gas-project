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

  public columnDefs: ColDef[] = [
    {
      field: 'رقم المحطة',
   
    },
    { field: 'إسم المحطة' },
    { field: 'المنطقة' },
    {field: 'عدد الأجهزة'},
    {field:'عدد العمال'},
    {field:' حالة المحطة'},
    {field:'  خيارات'},

  ];
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
  };
  public rowSelection: 'single' | 'multiple' = 'multiple';
  public isRowSelectable: IsRowSelectable = (
    params: IRowNode<Stations>
  ) => {
    return !!params.data && params.data.year === 2012;
  };
  public rowData!: Stations[];

  constructor(private http: HttpClient) {}

  onFirstDataRendered(params: FirstDataRenderedEvent<Stations>) {
    params.api.forEachNode((node) =>
      node.setSelected(!!node.data && node.data.year === 2012)
    );
  }

  onGridReady(params: GridReadyEvent<Stations>) {
    this.http
      .get<Stations[]>(
        'https://www.ag-grid.com/example-assets/small-olympic-winners.json'
      )
      .subscribe((data) => (this.rowData = data));
  }

}
