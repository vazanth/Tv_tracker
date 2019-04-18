import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { EpisodeDashboardComponent } from './episode-dashboard/episode-dashboard.component';
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes=[
  {path : '' , component: WelcomeComponent},
  {path: 'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'watchlist', component: EpisodeDashboardComponent}// canActivate: [AuthGuardService]}
]

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports:[RouterModule],
  providers:[AuthGuardService]
})
export class AppRoutingModule { }
