import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CommonService } from 'src/app/shared/common.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: AuthService) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm){
    // console.log(form.value);
    this.service.login(form.value);
  }

}
