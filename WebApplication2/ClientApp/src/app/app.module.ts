import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InverterComponent } from './inverter/inverter.component';


@NgModule({
  declarations: [
    AppComponent,
    InverterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
