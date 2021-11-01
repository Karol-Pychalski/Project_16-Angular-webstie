//Times directive created in v.111
//the goal of this directive is print out on the screen some element several times

import { TemplateAstPath } from '@angular/compiler';
import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]',
})
export class TimesDirective {
  constructor(
    private viewContainer: ViewContainerRef,
    private tempateRef: TemplateRef<any>
  ) {}

  //any times when somebody will try to set appTimes property we will run render function
  @Input('appTimes') set render(times: number) {
    this.viewContainer.clear();

    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.tempateRef, {});
    }
  }
}
