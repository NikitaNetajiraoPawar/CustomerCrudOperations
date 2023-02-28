import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MainRoutes }  from '../Routing/CustomerApp.MainRoutes';
import { HomeComponent } from './CustomerApp.HomeComponent';
import { MasterPageComponent } from './CustomerApp.MasterPageComponent';

@NgModule({
  declarations: [
   HomeComponent,MasterPageComponent
  ],
  imports: [
    BrowserModule ,
    FormsModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
