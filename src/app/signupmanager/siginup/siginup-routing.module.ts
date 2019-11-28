import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiginupComponent } from './siginup.component';

const routes: Routes = [{ path: '', component: SiginupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiginupRoutingModule { }
