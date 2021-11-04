import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';

//path:'' explained in video 106/107 (the same situation like tith elements component)
//Routes developed since vid.124:
const routes: Routes = [
  { 
    path: '', 
    component: CollectionsHomeComponent, 
    children: [
      { path: '', component: BiographyComponent },
      { path: 'companies', component: CompaniesComponent },
      { path: 'partners', component: PartnersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionsRoutingModule {}
