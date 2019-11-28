import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigininComponent } from './siginin.component';

const routes: Routes = [{ path: '', component: SigininComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigininRoutingModule { }
