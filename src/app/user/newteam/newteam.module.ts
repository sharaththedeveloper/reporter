import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewteamRoutingModule } from './newteam-routing.module';
import { NewteamComponent } from './newteam.component';


@NgModule({
  declarations: [NewteamComponent],
  imports: [
    CommonModule,
    NewteamRoutingModule
  ]
})
export class NewteamModule { }
