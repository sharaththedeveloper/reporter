import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectionsRoutingModule } from './connections-routing.module';
import { ConnectionsComponent } from './connections.component';


@NgModule({
  declarations: [ConnectionsComponent],
  imports: [
    CommonModule,
    ConnectionsRoutingModule
  ]
})
export class ConnectionsModule { }
