import { Component } from '@angular/core';

/**
 * Generated class for the GetProductComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'get-product',
  templateUrl: 'get-product.html'
})
export class GetProductComponent {

  text: string;

  constructor() {
    console.log('Hello GetProductComponent Component');
    this.text = 'Hello World';
  }

}
