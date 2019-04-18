import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  ValidDate: Date;
  visible: boolean = false;
  constructor(private authService : AuthService) { }

  ngOnInit() {
    this.ValidDate = new Date();
    this.ValidDate.setFullYear(this.ValidDate.getFullYear() - 18);
    this.signupForm = new FormGroup({
      'Email': new FormControl(null, [Validators.required, Validators.email]),
      'Password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'Date': new FormControl(null, Validators.required),
      'Agreement': new FormControl(null, Validators.required)
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
    //console.log(this.signupForm);
    this.authService.authRegister({
      email: this.signupForm.get('Email').value,
      password: this.signupForm.get('Password').value
    })
  }

}
