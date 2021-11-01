import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

//poniższe opisy pochodzą z wideo 103, 104, 105, 106, 107, 108
//path: '' - empty string refers to starting page of localhost:4200
// ** - oznacza dowolny link (jakikolwiek ciąg znaków)
// v.106 - loadChildren is a property with arrow funcion of import, it specifies what to do when user will go to path:'elements', in import there is a path to a proper subpage imported dynamically,
// .then specifies which module should be loaded when import function is called
const routes: Routes = [
  {
    path: 'elements',
    loadChildren: () =>
      import('./elements/elements.module').then((m) => m.ElementsModule),
  },
  {
    path: 'collections',
    loadChildren: () =>
      import('./collections/collections.module').then(
        (m) => m.CollectionsModule
      ),
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
