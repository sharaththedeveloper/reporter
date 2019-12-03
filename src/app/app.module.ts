import { DashboardComponent } from './user/dashboard/dashboard.component';

import { UserComponent } from './user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavComponent } from './user/nav/nav.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    UserComponent,
    NavComponent,
    DashboardComponent

  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    // NgbModule
  ],
  providers: [
            {
        provide: LocationStrategy,
        useClass: HashLocationStrategy
        }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
