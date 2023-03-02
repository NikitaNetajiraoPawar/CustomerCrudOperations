import { Component } from '@angular/core';
import {BaseLogger} from'../Utility/CustomerApp.Logger';

@Component({
  templateUrl: './CustomerApp.HomeView.html'
})
export class HomeComponent {
  title = 'Home';
  LogObject:BaseLogger;
 constructor(_logger:BaseLogger)
 {
  this.LogObject=_logger;
  this.LogObject.Log();
 }
}
