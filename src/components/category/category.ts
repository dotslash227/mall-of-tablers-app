import { Component, Input, OnInit } from '@angular/core';

/**
 * Generated class for the CategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'category',
  templateUrl: 'category.html'
})
export class CategoryComponent implements OnInit {

  text: string;
  @Input() image;
  @Input() name;
  @Input() count;
  imgPlaceholder = './assets/imgs/category_background.png';
  @Input() sponsored;

  constructor() {
    console.log('Hello CategoryComponent Component');
    this.text = 'Hello World';
    this.sponsored = this.sponsored == undefined ? false : true;
  }

  initialize(object, placeholder) {
    return (!object || object == null) ? placeholder : object;
  }

  ngOnInit() {
    this.image = this.initialize(this.image, this.imgPlaceholder);
    this.name = this.initialize(this.name, 'Category type');
  }

}
