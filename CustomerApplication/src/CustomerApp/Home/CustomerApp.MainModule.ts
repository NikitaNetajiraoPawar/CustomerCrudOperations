import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MainRoutes }  from '../Routing/CustomerApp.MainRoutes';
import { HomeComponent } from './CustomerApp.HomeComponent';
import { MasterPageComponent } from './CustomerApp.MasterPageComponent';
import { DbLogger, BaseLogger, ConsoleLogger,FileLogger } from '../Utility/CustomerApp.Logger';

var providerCollection:any=[];
providerCollection.push( {provide:"1",useClass:ConsoleLogger});
providerCollection.push( {provide:"2",useClass:DbLogger});
providerCollection.push( {provide:"3",useClass:FileLogger} );
providerCollection.push( { provide:BaseLogger,useClass:ConsoleLogger});


@NgModule({
  declarations: [
   HomeComponent,MasterPageComponent
  ],
  imports: [
    BrowserModule ,
    FormsModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [

    //Instead of creating collection of providers have a look above code of providercollection code
    //{ provide:BaseLogger,useClass:ConsoleLogger},//Centralized DI
    //Conditional DI
    // {provide:"1",useClass:ConsoleLogger},
    // {provide:"2",useClass:DbLogger},
    // {provide:"3",useClass:FileLogger}     
    
    //All providers are added dynamically here
    providerCollection

  ],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
