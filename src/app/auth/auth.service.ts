import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonService } from '../shared/common.service';

// const url = "https://apibyashu.herokuapp.com/api";

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient,
    // private cs: CommonService,
    private router: Router) { }

  login(f) {
    let user = {
      email: f.email,
      password: f.password,
    }
    // console.log("Registration started with this user data", f);
    let url = "https://apibyashu.herokuapp.com/api/login";
    this.http.post(url, user).subscribe((response) => {
      console.log("response from signupapi", response);
      if (response["token"]) {
        localStorage.isLoggedin = true;
        localStorage.user = JSON.stringify(response);
        // this.cs.isLoggedin = true;
        // this.cs.user = response;
        this.router.navigate(['/product-list']);
      }
      else {
        this.router.navigate(['/'])
      }
    }, (error) => {
      console.log("error from signup api", error)
    });

  }
  signup(f) {
    let user = {
      name: f.name,
      email: f.email,
      password: f.password,
    }
    console.log("Registration started with this user data", f)
    let url = "https://apibyashu.herokuapp.com/api/register";
    this.http.post(url, user).subscribe((response) => {
      console.log("response from signupapi", response);
    }, (error) => {
      console.log("error from signup api", error);
    })
  }

  forgotpass(f) {
    let user = {
      email: f.email
    }
    var url = "https://apibyashu.herokuapp.com/api/resetpassword";
    this.http.post(url, user).subscribe((response) => {
      console.log("response from signupapi", response);

    }, (error) => {
      console.log("error from signup api", error);
    })
  }

  getData() {
    return this.http.get("https://apibyashu.herokuapp.com/api/allproducts");
  }

  // getProduct(product, productid){
  //   this.http.get('https://apibyashu.herokuapp.com/api/product/' + productid).subscribe((res)=>{
  //     // console.log('response from showproductpage',res);
  //     this.cs.product = res['data'];
  //     // console.log(product);
  //   }, (error)=>{
  //     console.log(error)
  //   })
  // }

  // addtocart(product, ) {
  //   if (this.cs.isLoggedin) {
  //     let url = "https://apibyashu.herokuapp.com/api/addtocart";
  //     let requestobj = {
  //       owner: {
  //         email: this.cs.user.email,
  //         name: this.cs.user.name,
  //       },
  //       productid: product["productid"],
  //       name: product["name"],
  //       image: product['image'],
  //       price: product["price"]
  //     }
  //     this.http.post(url, requestobj).subscribe((res) => {
  //       console.log('checkrespone on adding product to cart', res);
  //       this.router.navigate(['/cart']);
  //     }, (error) => {
  //       console.log('error from addtocart', error);

  //     });

  //   }
  //   else {
  //     this.router.navigate(['/login']);
  //   }
  // }

  // cart(user, totalprice) {
  //   let url = 'https://apibyashu.herokuapp.com/api/cart';
  //   this.http.post(url, user).subscribe((res) => {
  //     console.log('response from cart', res);
  //     this.cs.totalprice = totalprice;
  //     this.cs.cart = res['data'];
  //   }, (error) => {
  //     console.log('error from cart', error)
  //   })
  // }

}    
