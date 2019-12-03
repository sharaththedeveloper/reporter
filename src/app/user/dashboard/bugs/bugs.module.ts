import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BugsRoutingModule } from './bugs-routing.module';
import { BugsComponent } from './bugs.component';


@NgModule({
  declarations: [BugsComponent],
  imports: [
    CommonModule,
    BugsRoutingModule
  ]
})
export class BugsModule { }
