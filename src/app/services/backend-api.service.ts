import { Injectable, ErrorHandler  } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse,  HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import { Url } from 'url';
//import {Student} from './student'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BackendApiService {
  //studentList:Student[] = new Array<Student>();
  base_url:string;
  constructor(private _http:HttpClient) {
    //this.getStudetMarkData ()
      this.base_url = environment.base_url;
  }   

  getMapData() {
     return this._http.get('../../assets/data/mapdata.json');
  }

  getStudetMarkData(){
    return this._http.get(this.base_url + 'student');    
  }
  
  addStudetMarkData (newlist){ 
    return this._http.post(this.base_url + 'student', newlist);
  }

  deleteStudetMarkData (id){ 
    return this._http.delete(this.base_url + 'student/'+id);
    //return this._http.delete(this.base_url + 'student', {params: {id: id}});
  }
 

  


}
