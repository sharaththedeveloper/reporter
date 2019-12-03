import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardhomeComponent } from './dashboardhome.component';

const routes: Routes = [{ path: '', component: DashboardhomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardhomeRoutingModule { }
