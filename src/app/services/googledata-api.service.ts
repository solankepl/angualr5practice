import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class GoogledataApiService {
   
  constructor(private http:HttpClient) {}   
    getFoods() {
        return this.http.get('/api/food');
    }

}
