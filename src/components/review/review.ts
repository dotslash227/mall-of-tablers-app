import { Component } from '@angular/core';

/**
 * Generated class for the ReviewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'review',
  templateUrl: 'review.html'
})
export class ReviewComponent {

  text: string;

  constructor() {
    console.log('Hello ReviewComponent Component');
    this.text = 'Hello World';
  }

}
