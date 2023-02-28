import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SupplierRoutes }  from '../Routing/CustomerApp.SupplierRoutes';
import { SupplierComponent } from './CustomerApp.SupplierComponent';

@NgModule({
  declarations: [
  SupplierComponent
  ],
  imports: [
    CommonModule ,
    FormsModule,
    RouterModule.forChild(SupplierRoutes)
  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }
