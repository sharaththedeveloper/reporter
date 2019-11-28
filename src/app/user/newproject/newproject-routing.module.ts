import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewprojectComponent } from './newproject.component';

const routes: Routes = [{ path: '', component: NewprojectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewprojectRoutingModule { }
