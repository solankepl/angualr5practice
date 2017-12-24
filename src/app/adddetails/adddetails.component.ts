import { Component, OnInit } from '@angular/core';
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
  constructor(private _studentdataService: StudentdataService) { }

  ngOnInit() {
  }

  submitForm(studentform:Student){    
    //console.log(isEmpty(this.student));
    //if(this.studentId == 'blank'){
        this._studentdataService.addStudentMarkData(this.student);
    //}else{
        //this._studentdataService.updateStudentData(this.student, this.studentId);
   // }

    
    
    
    //this.router.navigateByUrl('/about');
}

}
