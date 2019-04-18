import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { CurrentWatchlistComponent } from './episode-dashboard/current-watchlist/current-watchlist.component';
import { PastWatchlistComponent } from './episode-dashboard/past-watchlist/past-watchlist.component';
import { NewWatchlistComponent } from './episode-dashboard/new-watchlist/new-watchlist.component';
import { EpisodeDashboardComponent } from './episode-dashboard/episode-dashboard.component';
import { AuthService } from './auth/auth.service'
import { SearchService } from './episode-dashboard/service/search.service';
import { SearchInterceptor } from './episode-dashboard/service/Interceptor/search.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavComponent,
    CurrentWatchlistComponent,
    PastWatchlistComponent,
    NewWatchlistComponent,
    EpisodeDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, SearchService,
  {provide: HTTP_INTERCEPTORS, useClass: SearchInterceptor, multi: true},
 // {provide: HTTP_INTERCEPTORS, useClass: EpisodeListInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
