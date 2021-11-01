import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { SharedModule } from '../shared/shared.module';
// import { PlaceholderComponent } from '../elements/placeholder/placeholder.component';

//eksportowana jest nazwa klasy, która jest potem dodawana do imports w app.module.ts
//to są tablice []
@NgModule({
  declarations: [CollectionsHomeComponent],
  imports: [CommonModule, CollectionsRoutingModule, SharedModule],
  exports: [],
})
export class CollectionsModule {}
