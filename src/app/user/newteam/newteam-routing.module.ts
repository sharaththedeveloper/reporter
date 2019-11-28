import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewteamComponent } from './newteam.component';

const routes: Routes = [{ path: '', component: NewteamComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewteamRoutingModule { }
