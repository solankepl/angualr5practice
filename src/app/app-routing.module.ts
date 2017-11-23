import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router'
//import {HeaderComponent} from './component/header/header.component';
import {HomeComponent} from './component/home/home.component';
import {AboutComponent} from './component/about/about.component';
HomeComponent
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
    path: '**', 
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: [HomeComponent,AboutComponent]
})
export class AppRoutingModule { }
