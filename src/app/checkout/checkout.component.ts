import { Component, OnInit } from '@angular/core';
import { CssSelector } from '@angular/compiler';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
 
  constructor(private cs: CommonService,) { }
 order ={
   name: '',
   area: '',
   pincode:'',
   city: '',
   phone: '',
   email: localStorage.email,
   totalprice: this.cs.totalprice,
   items: this.cs.cart,
 }
  
  ngOnInit(): void {
  }

  placeorder(f){
    alert('Your order placed')
  }
}
