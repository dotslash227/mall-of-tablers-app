import { Directive, ElementRef, OnInit, Renderer } from '@angular/core';

/**
 * Generated class for the BlockDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[block]' // Attribute selector
})
export class BlockDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer) {
    console.log('Hello BlockDirective Directive');
    this.renderer.setElementStyle(this.el.nativeElement, 'display', 'block');
  }

  ngOnInit() {
  }

}
