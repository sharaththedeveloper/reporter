import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewprojectRoutingModule } from './newproject-routing.module';
import { NewprojectComponent } from './newproject.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
  declarations: [NewprojectComponent],
  imports: [
    CommonModule,
    NewprojectRoutingModule,
    // BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
  ]
})
export class NewprojectModule { }
