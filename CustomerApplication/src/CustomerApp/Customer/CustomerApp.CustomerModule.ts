import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomerRoutes  }  from '../Routing/CustomerApp.CustomerRoutes';
import { CustomerComponent } from './CustomerApp.CustomerComponent';

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule ,
    FormsModule,
    RouterModule.forChild(CustomerRoutes)
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }