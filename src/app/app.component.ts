import { Component } from '@angular/core';
import{ StudentdataService } from './services/studentdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
     constructor(private _studentdataService:StudentdataService){
        this._studentdataService.callApimarkData();
     };
}
