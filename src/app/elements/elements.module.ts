import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import of SharedModule in vid.113
import { SharedModule } from '../shared/shared.module';
import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TimesDirective } from './times.directive';

//export of [ElementsHomeComponent] is not necessary as we're not importing it to app.module.ts
//ElementsModule is now a 'routed module' because its components are only displayed depending on what route a user is at
//When SharedMoudle (which will be used multiple times) is imported here, now we can access all different components inside shared component
@NgModule({
  declarations: [ElementsHomeComponent, PlaceholderComponent, TimesDirective],
  imports: [CommonModule, ElementsRoutingModule, SharedModule],
  exports: [],
})
export class ElementsModule {}
