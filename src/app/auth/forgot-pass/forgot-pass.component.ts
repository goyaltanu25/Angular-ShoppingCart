import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  constructor(private service: AuthService) { }

  ngOnInit(): void {
  }

  forgot_pass(form: NgForm){
    //  console.log(form.value);
    this.service.forgotpass(form.value)
  }

}
