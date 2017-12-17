import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adddetails',
  templateUrl: './adddetails.component.html',
  styleUrls: ['./adddetails.component.less']
})
export class AdddetailsComponent implements OnInit {
  studentId:any;
  student:Student = {
          name : '',             
          english:'',
          math:'',
          hindi:''
} 
  constructor() { }

  ngOnInit() {
  }

}
