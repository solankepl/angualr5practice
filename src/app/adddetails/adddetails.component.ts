import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, Router  } from '@angular/router';
import{ Student } from '../services/student';
import{ StudentdataService } from '../services/studentdata.service';
@Component({
  selector: 'app-adddetails',
  templateUrl: './adddetails.component.html',
  styleUrls: ['./adddetails.component.less']
})
export class AdddetailsComponent implements OnInit {
  studentId:any;
  student:Student  = {
          name : '',             
          english:0,
          math:0,
          hindi:0
} 
  constructor(private _studentdataService: StudentdataService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
  }

  submitForm(studentform:Student){    
    //console.log(isEmpty(this.student));
    //if(this.studentId == 'blank'){
        this._studentdataService.addStudentRecord(this.student);
    //}else{
        //this._studentdataService.updateStudentData(this.student, this.studentId);
   // }
   this._router.navigate(["/", "studentlist"]);
   //this._router.navigateByUrl[("/studentlist")];
}

}
