import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() data: {
      name: string,
      image: string,
      brand: string,
      productid: string,
      price: string,
  };

  constructor(private router: Router){

  }
  ngOnInit(): void {
  }

  showproduct(){
   let routerurl = '/product-list/'+ this.data.productid; 
   this.router.navigate([routerurl]);
  }

}
