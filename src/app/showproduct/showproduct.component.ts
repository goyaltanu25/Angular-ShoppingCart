import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})
export class ShowproductComponent implements OnInit {
  productid = null;
  product = {
    name: '',
    price: '',
    image:'',
  };
  totalprice;
  cart;
  constructor(private http: HttpClient,
    private cs: CommonService,
    private activatedroute: ActivatedRoute,
    private router: Router) {
    this.productid = this.activatedroute.snapshot.params.id;
  }

  ngOnInit(): void {
   this.http.get('https://apibyashu.herokuapp.com/api/product/' + this.productid).subscribe((res)=>{
     console.log('response from showproductpage',res);
     this.product = res['data'];
     console.log(this.product);
   }, (error)=>{
     console.log(error)
   })
  }
  addtocart(){
    // console.log(this.cs.isLoggedin, this.cs.user);
    if(this.cs.isLoggedin){
      let url= "https://apibyashu.herokuapp.com/api/addtocart";
      let requestobj={
       owner:{
         email: '',
         name: ''
       },
       productid: this.product["productid"],
       name: this.product["name"],
       image: this.product['image'],
       price: this.product["price"]
      }
      this.http.post(url,requestobj).subscribe((res)=>{
        console.log('checkrespone on adding product to cart', res)
      });
      this.router.navigate(['/cart']);
    }
    else{
      this.router.navigate(['/login']);
    }
    // this.cs.totalprice = this.totalprice;
    // this.cs.cart = this.cart
    // this.router.navigate(['/cart']);
  }

}
