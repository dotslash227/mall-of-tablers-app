import { Directive, ElementRef, Renderer } from '@angular/core';

/**
 * Generated class for the TransparentButtonDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[transparent-button]' // Attribute selector
})
export class TransparentButtonDirective {

  constructor(private el: ElementRef, private renderer: Renderer) {
    console.log('Hello TransparentButtonDirective Directive');
    this.renderer.setElementStyle(this.el.nativeElement, 'background', 'none');
    this.renderer.setElementStyle(this.el.nativeElement, 'border', 'none');
    this.renderer.setElementStyle(this.el.nativeElement, 'box-shadow', 'none');
  }

}
