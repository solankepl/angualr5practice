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
     this.callApiStudentData();  
     //let p1 = new Student("Pavan Solanke",77,70,50);
    
     //this.studentList.push(p1);
    
  }

  resolve (route: ActivatedRouteSnapshot): Observable<any> {
    return Observable.from(this._backendApiService.getStudetMarkData());
  }

  callApiStudentData(){
    this._backendApiService.getStudetMarkData().subscribe(
      (data: any[]) => {
          this.studentList = data;                 
      },
      error => {
      });
  }

  getStudentData():Student[]{
      this.callApiStudentData(); 
      return this.studentList;
  }


  addStudentRecord(obj):void{ 
    obj = this.setStudentID(obj)   
    this.studentList.push(obj);
    this._backendApiService.addStudetMarkData(obj).subscribe(
      (data: any[]) => {        
       console.log("send");  
       this.callApiStudentData();      
      },
      error => {
      });
  }

  setStudentID(obj):any{
    let curId:any = this.studentList[this.studentList.length-1];
    if(typeof curId === "undefined"){
      obj.id = 1;
    } else{
      obj.id = curId.id + 1
    }
    return obj;
  }

  deleteStudentRecord(id):void{
    console.log(id);
    this.studentList.splice(id, 1);  
    this._backendApiService.deleteStudetMarkData(id).subscribe(
      (data: any[]) => {    
        console.log(data);
      },
      error => {
      });
    //this.studentList.splice(id, 1);
  //   this._backendApiService.addStudetMarkData(obj).subscribe(
  //     (data: any[]) => {        
  //      console.log("send");       
  //     },
  //     error => {
  //     });
  }

}
