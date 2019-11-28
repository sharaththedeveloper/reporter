import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewprojectRoutingModule } from './newproject-routing.module';
import { NewprojectComponent } from './newproject.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [NewprojectComponent],
  imports: [
    CommonModule,
    NewprojectRoutingModule,
    NgbModule
  ]
})
export class NewprojectModule { }
