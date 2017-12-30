import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
//import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
//import { GoogledataApiService } from './services/googledata-api.service';
//import { DataTableModule } from 'angular-4-data-table-bootstrap-4';
import { BackendApiService } from './services/backend-api.service';
import { StudentdataService } from './services/studentdata.service';



//import { HomeComponent } from './component/home/home.component';
//import { AboutComponent } from './component/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    //AngularFontAwesomeModule,
    HttpClientModule,
    AppRoutingModule  
  ],
  providers: [BackendApiService, StudentdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
