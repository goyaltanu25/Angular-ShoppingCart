import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 user={
   email: ''
 }
 totalprice;
 cart =[];
  constructor(private http: HttpClient,
    private cs: CommonService, 
    private router: Router) { 
    if(!localStorage.isloggedin){
      this.router.navigate(['/cart']);
    }
  }

  ngOnInit(): void {
    let url = 'https://apibyashu.herokuapp.com/api/cart';
    this.http.post(url, this.user).subscribe((res)=>{
      console.log('response from cart', res);
      this.cart = res['data'];
    },(error)=>{
      console.log('error from cart', error)
    })
  }

  checkout(){
    // this.service.cart(this.user);
    this.cs.totalprice = this.totalprice;
    this.cs.cart = this.cart;
    this.router.navigate(['/checkout']);
  }

}
