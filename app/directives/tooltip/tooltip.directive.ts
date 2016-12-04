import { Directive,
         ElementRef,
         ComponentRef, HostListener, Input, Renderer, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

import { TooltipComponent } from './tooltip.component';

@Directive({
  selector: '[tooltip]'
})

export class Tooltip {
// Properties

  private tooltip: ComponentRef<TooltipComponent>;
  private visible: boolean;

  // Inputs / Outputs

  @Input('tooltip')
  content: string|TooltipComponent;

  @Input()
  tooltipDisabled: boolean;

  @Input()
  tooltipAnimation: boolean = true;

  @Input()
  tooltipPlacement: 'top'|'bottom'|'left'|'right' = 'top';

  constructor(private el: ElementRef,
              private renderer: Renderer,
              private viewContainerRef: ViewContainerRef,
              private resolver: ComponentFactoryResolver) {
      renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
   }

    // Public Methods

    @HostListener('focusin')

    @HostListener('mouseenter')

  show(): void {
    if (this.tooltipDisabled || this.visible) {
      return;
    }

    this.visible = true;
    if (typeof this.content === 'string') {
      const factory = this.resolver.resolveComponentFactory(TooltipComponent);
      if (!this.visible){
        return;
      }

      this.tooltip = this.viewContainerRef.createComponent(factory);
      this.tooltip.instance.hostElement = this.viewContainerRef.element.nativeElement;
      this.tooltip.instance.content = this.content as string;
      this.tooltip.instance.placement = this.tooltipPlacement;
      this.tooltip.instance.animation = this.tooltipAnimation;
    } else {
      const tooltip = this.content as TooltipComponent;
      tooltip.hostElement = this.viewContainerRef.element.nativeElement;
      tooltip.placement = this.tooltipPlacement;
      tooltip.animation = this.tooltipAnimation;
      tooltip.show();
    }
  }

  @HostListener('focusout')
  @HostListener('mouseleave')

  hide(): void {
    if (!this.visible) {
      return;
    }

    this.visible = false;
    if (this.tooltip) {
      this.tooltip.destroy();
    }

    if (this.content instanceof TooltipComponent) {
      (this.content as TooltipComponent).hide();
    }
  }
}
