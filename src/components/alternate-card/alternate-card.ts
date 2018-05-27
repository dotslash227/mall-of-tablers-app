import { Component } from '@angular/core';

/**
 * Generated class for the AlternateCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'alternate-card',
  templateUrl: 'alternate-card.html'
})
export class AlternateCardComponent {

  text: string;

  constructor() {
    console.log('Hello AlternateCardComponent Component');
    this.text = 'Hello World';
  }

}
