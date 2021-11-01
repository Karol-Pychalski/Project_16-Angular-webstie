import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsHomeComponent } from './elements-home/elements-home.component';

//video 106/107
//there was path: 'elements' where elements was an url path (localhost:4200/elements) (c.d poniżej)
//but due to change of entire component to be lazy loading, we added already routing for the component to app-routing.module.ts, instead of that here is just path:''
//component: ElementsHomeComponent - will show this component on the screen
const routes: Routes = [{ path: '', component: ElementsHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElementsRoutingModule {}
