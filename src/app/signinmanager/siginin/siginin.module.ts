import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigininRoutingModule } from './siginin-routing.module';
import { SigininComponent } from './siginin.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SigininComponent],
  imports: [
    CommonModule,
    SigininRoutingModule,
    ReactiveFormsModule
  ]
})
export class SigininModule { }
