import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  authenticated: boolean;
  constructor(private authservice: AuthService) { }

  ngOnInit() {
    this.authservice.authUser.subscribe((authUser) => {
      this.authenticated = authUser;
    })
  }

  ToggleSidenav(){
    this.sidenavClose.emit();
  }

  logout(){
    this.authservice.logout();
    this.ToggleSidenav();
  }

}
