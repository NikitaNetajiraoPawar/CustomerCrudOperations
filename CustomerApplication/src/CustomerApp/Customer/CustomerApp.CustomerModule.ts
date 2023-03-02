import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomerRoutes  }  from '../Routing/CustomerApp.CustomerRoutes';
import { CustomerComponent } from './CustomerApp.CustomerComponent';
import { GridComponent } from '../Utility/CustomerApp.GridComponent';

@NgModule({
  declarations: [
    CustomerComponent,
    GridComponent
  ],
  imports: [
    CommonModule ,
    FormsModule,ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}) ,
    RouterModule.forChild(CustomerRoutes)
  ],
  providers: [ 
   
  ],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
