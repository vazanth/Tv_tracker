import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sidenav = new EventEmitter();
  authenticated: boolean;
  constructor( private authservice: AuthService) { }

  ngOnInit() {
    this.authservice.authUser.subscribe((authUser) => {
      this.authenticated = authUser;
    })
  }

  ToggleNav(){
    this.sidenav.emit();
  }

  logout(){
    this.authservice.logout();
  }
}

