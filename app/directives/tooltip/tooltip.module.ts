import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipComponent } from './tooltip.component';
import { Tooltip } from './tooltip.directive';

export * from './tooltip.directive';
export * from './tooltip.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    Tooltip,
    TooltipComponent
  ],
  declarations: [
    TooltipComponent,
    Tooltip
  ],
  entryComponents: [
    TooltipComponent
  ]
})

export class TooltipModule { }
