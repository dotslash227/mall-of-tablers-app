import { Component, Input } from '@angular/core';

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
  @Input() title;
  @Input() imgSrc = this.imgSrc == undefined || this.imgSrc == 'null' || this.imgSrc == null ? './assets/imgs/thumbnail.png' : this.imgSrc;
  @Input() companyName;

  constructor() {
    console.log('Hello AlternateCardComponent Component');
    this.text = 'Hello World';

    if (this.title == undefined || this.title == null) {
      this.title = 'Lorem Ipsum tu et!';
    }

    // this.imgSrc = this.imgSrc == undefined || this.imgSrc == null ? './assets/imgs/thumbnail.png' : this.imgSrc;
    console.log(this.imgSrc);

    if (this.companyName == undefined || this.companyName == null) {
      this.companyName = 'Lorem Ipsum';
    }
  }

}
