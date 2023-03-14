import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChartsServiceService {
 
  // headers={
  //   "Access-Control-Allow-Origin": "*",
  //   "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, DELETE, HEAD",
  //   'Content-Type': 'application/json-patch+json',
  //   'accept': 'application/json-patch+json',
  // }
  // headers= {
  //   "lang":"en",
  //   "Access-Control-Allow-Origin": "*",
  //   "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, DELETE, HEAD",
  //   'Content-Type': 'application/json-patch+json',
  //   'accept': '*/*',
  // }
    // const headers= new HttpHeaders()
    // .set('content-type', 'application/json-patch+json')
    // .set('Access-Control-Allow-Origin', '*')
    // .set('Access-Control-Allow-Methods','POST, GET, OPTIONS, PUT, DELETE, HEAD')
    // .set('accept','*/*')
   

  constructor(private http: HttpClient) {
  
 


  }
  getCategory(id:number): Observable<any> {
   return this.http.get(`https://robogasclientapi.icitybackend.com/api/Category/${id}`,{});
  }
  getAllCategory(): Observable<any>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'access-control-allow-origin': '*',
      'accept': '/' });
    let options = { headers: headers };
    let data = {};
    return this.http.post('https://robogasclientapi.icitybackend.com/api/Category/GetAll',data,options)
  }
}
