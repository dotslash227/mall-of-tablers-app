import { Directive, ElementRef, Renderer } from '@angular/core';

/**
 * Generated class for the CustomMaxWidthDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[custom-max-width]' // Attribute selector
})
export class CustomMaxWidthDirective {

  constructor(private el: ElementRef, private renderer: Renderer) {
    console.log('Hello CustomMaxWidthDirective Directive');
    this.renderer.setElementStyle(this.el.nativeElement, 'padding', '0');
    this.renderer.setElementStyle(this.el.nativeElement, 'display', 'block');
    this.renderer.setElementStyle(this.el.nativeElement, 'max-width', '630px');
    this.renderer.setElementStyle(this.el.nativeElement, 'margin', '0 auto');
  }

}
