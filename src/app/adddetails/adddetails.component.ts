import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adddetails',
  templateUrl: './adddetails.component.html',
  styleUrls: ['./adddetails.component.less']
})
export class AdddetailsComponent implements OnInit {
  studentId:any;
  student:any = {
          name : '',             
          english:'',
          math:'',
          hindi:''
} 
  constructor() { }

  ngOnInit() {
  }

  postForm(studentform:any){    
    //console.log(isEmpty(this.student));
    if(this.studentId == 'blank'){
        //this.studentdataService.addStudentData(this.student);
    }else{
        //this.studentdataService.updateStudentData(this.student, this.studentId);
    }
    
    
    //this.router.navigateByUrl('/about');
}

}
