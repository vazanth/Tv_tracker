import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  visible:boolean;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'Email': new FormControl(null, [Validators.required, Validators.email]),
      'Password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  visilePwd(){
    if(this.visible == true){
      this.visible = false;
    }else{
      this.visible = true;
    }
    
  }

  onSubmit(){
    //console.log(this.loginForm);
    this.authService.authLogin({
      email: this.loginForm.get('Email').value,
      password: this.loginForm.get('Password').value
    });
  }

}
