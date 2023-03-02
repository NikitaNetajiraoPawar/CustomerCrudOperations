import { Component,Injector } from '@angular/core';
import { Customer } from './CustomerApp.model';
import {BaseLogger} from'../Utility/CustomerApp.Logger';
import { HttpClient } from '@angular/common/http';

@Component({ 
  templateUrl: './CustomerApp.CustomerView.html'
})
export class CustomerComponent {
  title = 'CustomerApplication';
  CustomerModel:Customer=new Customer();
  CustomerModels:Array<Customer>=new Array<Customer>();
  LogObject:BaseLogger;
 constructor(_injector:Injector,public http:HttpClient)
 {
  this.LogObject=_injector.get("2");
  this.LogObject.Log();
 }

 PosttoServer()
 {
  //http://localhost:3000/customers
var CustDTO:any={};
CustDTO.CustomerCode=this.CustomerModel.CustomerCode;
CustDTO.CustomerName=this.CustomerModel.CustomerName;
CustDTO.CustomerAmount=this.CustomerModel.CustomerAmount;


this.http.post("http://localhost:3000/customers",CustDTO)
.subscribe(request=>this.success(request),response=>this.Error(response))
 }


 GetFromServer()
  {
  this.http.get("http://localhost:3000/customers")
  .subscribe(result=>this.successGet(result),response=>this.Error(response))
  }




 Error(res:any)
 {
  console.debug(res.json());
 }


 success(_res:any)
 {
  this.GetFromServer();
}
 successGet(res:any)
 {
  var tempCustomerList:Customer[] = [];

for(let result of res){

  var tempCustomer:Customer=new Customer();

  tempCustomer.CustomerCode=result.CustomerCode;

  tempCustomer.CustomerName=result.CustomerName;

  tempCustomer.CustomerAmount=result.CustomerAmount;

  tempCustomerList.push(tempCustomer);

}

this.CustomerModels=tempCustomerList;
  // this.CustomerModels= res.json();
 }


  Add()
  {
     this.CustomerModels.push(this.CustomerModel);
     this.CustomerModel=new Customer();
  }
  hasError(typeofValidator:string , controlName:string):boolean
  {
   return this.CustomerModel.formCustomerGroup.controls[controlName].hasError(typeofValidator);
  }

  SelectCustomer(_Selected:Customer)
  {
    this.CustomerModel=_Selected;
     }
}
