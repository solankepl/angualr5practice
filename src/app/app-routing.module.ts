import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AgmCoreModule } from '@agm/core';
//import {HeaderComponent} from './component/header/header.component';
import {HomeComponent} from './component/home/home.component';
import {AboutComponent} from './component/about/about.component';
import { MapComponent } from './map/map.component';
import { AdddetailsComponent } from './adddetails/adddetails.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
   {
    path: 'about',
    component: AboutComponent
  },  
  {
   path: 'adddetails',
   component: AdddetailsComponent
 },
  {
    path: '**', 
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,  
    FormsModule,  
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDTlwGkYrkmc0qvRfT52xUIh2SbrAOYXuU'
    }), 
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: [HomeComponent,AboutComponent, MapComponent, AdddetailsComponent]
})
export class AppRoutingModule { }
