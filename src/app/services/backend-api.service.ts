import { Injectable, ErrorHandler  } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class BackendApiService {
  
  constructor(private _http:HttpClient) {}   

  getMapData() {
    //console.log("get data");
     return this._http.get('../../assets/data/mapdata.json')
    //  .subscribe(
    //   (data:any[])=>{
    //     console.log(data);
    //   },
    //   error=>{
    //   });
  }
  
 


}
