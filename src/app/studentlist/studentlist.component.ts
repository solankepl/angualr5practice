import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
//import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import{ Student } from '../services/student';
import{ StudentdataService } from '../services/studentdata.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.less']
})
export class StudentlistComponent implements OnInit {
  studentList:Student[] =  new Array<Student>();
  constructor(private _studentdataService:StudentdataService) { 
    this._studentdataService.callApiStudentData();
    //this.studentList = curData;   
    //this.studentList.push(curData);
  }

  ngOnInit() {
    let curData = this._studentdataService.getStudentData();
    this.studentList = curData;   
  }

  deleteRecord(id) {
      console.log(id);
  }

}
