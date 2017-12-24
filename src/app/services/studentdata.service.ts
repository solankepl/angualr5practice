import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { BackendApiService } from './backend-api.service'
import { Student } from './student';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class StudentdataService {
  studentList:Student[] =  new Array<Student>();
  constructor(private _httpClient: HttpClient, private _backendApiService: BackendApiService,) { 
     //this.callApimarkData();  
     //let p1 = new Student("Pavan Solanke",77,70,50);
    
     //this.studentList.push(p1);
    
  }

  resolve (route: ActivatedRouteSnapshot): Observable<any> {
    return Observable.from(this._backendApiService.getStudetMarkData());
  }

  callApimarkData(){
    this._backendApiService.getStudetMarkData().subscribe(
      (data: any[]) => {        
        this.studentList = data;        
      },
      error => {
      });
  }

  getMarkData():Student[]{
      return this.studentList;
  }


  addStudentMarkData(obj):void{
    this._backendApiService.addStudetMarkData(obj).subscribe(
      (data: any[]) => {        
       console.log("send");       
      },
      error => {
      });
  }

}
