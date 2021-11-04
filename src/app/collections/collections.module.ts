import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { SharedModule } from '../shared/shared.module';
import { TableComponent } from './table/table.component';
import { CompaniesComponent } from './companies/companies.component';
import { BiographyComponent } from './biography/biography.component';
import { PartnersComponent } from './partners/partners.component';
import { TabsComponent } from './tabs/tabs.component';
// import { PlaceholderComponent } from '../elements/placeholder/placeholder.component';

//eksportowana jest nazwa klasy, która jest potem dodawana do imports w app.module.ts
//to są tablice []
@NgModule({
  declarations: [CollectionsHomeComponent, TableComponent, CompaniesComponent, BiographyComponent, PartnersComponent, TabsComponent],
  imports: [CommonModule, CollectionsRoutingModule, SharedModule],
  exports: [],
})
export class CollectionsModule {}
