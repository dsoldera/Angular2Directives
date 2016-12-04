import { Directive,  HostListener, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})


export class HighlightDirective {
   private _defaultColor = 'red';

  @Input() set defaultColor(colorName: string){
    this._defaultColor = colorName || this._defaultColor;
  }

  @Input('myHighlight') highlightColor: string;

  constructor(private el: ElementRef, private renderer: Renderer) {
      renderer.setElementStyle(el.nativeElement, 'font-size', '20px');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this._defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
