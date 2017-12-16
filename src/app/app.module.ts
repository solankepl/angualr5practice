import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
//import { GoogledataApiService } from './services/googledata-api.service';

import { BackendApiService } from './services/backend-api.service';


//import { HomeComponent } from './component/home/home.component';
//import { AboutComponent } from './component/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule  
  ],
  providers: [BackendApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
