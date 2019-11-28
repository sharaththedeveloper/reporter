import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiginupRoutingModule } from './siginup-routing.module';
import { SiginupComponent } from './siginup.component';


@NgModule({
  declarations: [SiginupComponent],
  imports: [
    CommonModule,
    SiginupRoutingModule,
    ReactiveFormsModule
  ]
})
export class SiginupModule { }
