import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

// import { TooltipComponent } from "./tooltip.component";

@Directive({
  selector: '[tooltip]'
})

export class Tooltip {
  constructor(private el: ElementRef, private renderer: Renderer) {
      renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
   }
}
