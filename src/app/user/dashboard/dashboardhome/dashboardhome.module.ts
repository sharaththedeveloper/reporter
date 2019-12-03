import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardhomeRoutingModule } from './dashboardhome-routing.module';
import { DashboardhomeComponent } from './dashboardhome.component';


@NgModule({
  declarations: [DashboardhomeComponent],
  imports: [
    CommonModule,
    DashboardhomeRoutingModule
  ]
})
export class DashboardhomeModule { }
