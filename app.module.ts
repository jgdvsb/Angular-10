import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HomeComponent} from './home.component';
import {LoginComponent} from './login/login.component';
import { OnewayComponent } from './oneway/oneway.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    OnewayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ OnewayComponent] //  HomeComponent//LoginComponent //OnewayComponent
})
export class AppModule { }
