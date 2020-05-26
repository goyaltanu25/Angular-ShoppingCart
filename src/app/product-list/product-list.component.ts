import { Component, OnInit , Input} from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  empData;
  constructor(private service: AuthService) { 
  }

  ngOnInit(): void {
    this.service.getData().subscribe(res =>{
      console.log(res['data']);
      this.empData = res['data']
    })
  }

 
}
