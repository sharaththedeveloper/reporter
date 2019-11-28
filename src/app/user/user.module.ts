import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [UserComponent, NavComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
