import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class CommonService {
   isLoggedin= localStorage.isLoggedin;
   totalprice;
   cart= [];
   // user = localStorage.user && JSON.parse(localStorage.user);


      // localStorage.setItem('isloggedin', 'true');
      // localStorage.setItem('user', JSON.stringify(this.user));
   
}