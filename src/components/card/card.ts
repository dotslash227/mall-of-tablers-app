import { Component, Input, OnInit } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';

/**
 * Generated class for the CardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card',
  templateUrl: 'card.html'
})
export class CardComponent implements OnInit {

  text: string;

  @Input() name;
  @Input() company;
  @Input() address;
  @Input() profileImgUri;

  constructor() {
    console.log('Hello CardComponent Component');
    this.text = 'Hello World';
  }

  ngOnInit() {
    this.profileImgUri = (!this.profileImgUri) ? '../../assets/imgs/profile.png' : this.profileImgUri;
  }

  showProfile() {
    console.log('Show Profile');
  }

}
