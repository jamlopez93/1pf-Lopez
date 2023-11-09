
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { MatTableModule } from '@angular/material/table';

import { NombresPipe } from '../nombres.pipe';
import { ListRoutingModule } from './list-routing.module';


@NgModule({
  declarations: [ListComponent, NombresPipe],
  imports: [CommonModule, MatTableModule, ListRoutingModule],
  exports: [ListComponent]
})
export class ListModule { }
