import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { Subject } from 'rxjs';

import { authModel } from './auth.model';
import { userModel } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData : userModel;
  //authUser: boolean = false;
  authUser = new Subject<boolean>();
  constructor(private route: Router) { }

  authRegister(authData: authModel){
    this.userData = {
      email : authData.email,
      userid : Math.round(Math.random() * 1000).toString()
    };
    this.authUser.next(true);
    this.route.navigate(['/watchlist']);
  }

  authLogin(authData: authModel){
    this.userData = {
      email : authData.email,
      userid : Math.round(Math.random() * 1000).toString()
    };
    this.authUser.next(true);
    this.route.navigate(['/watchlist']);
  }

  logout(){
    this.userData = null;
    this.authUser.next(false);
    this.route.navigate(['/login']);
  }

  isAuthenticated(){
    return this.userData!=null;
  }
}
