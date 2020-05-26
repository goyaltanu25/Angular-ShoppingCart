import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  constructor(private service: AuthService) { }

  ngOnInit(): void {
  }

  onSignup(form:NgForm){
     this.service.signup(form.value)
  }
}
