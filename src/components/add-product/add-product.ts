import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Form } from 'ionic-angular';

/**
 * Generated class for the AddProductComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-product',
  templateUrl: 'add-product.html'
})
export class AddProductComponent {

  text: string;

  addProductForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl('')
  })

  constructor() {
    console.log('Hello AddProductComponent Component');
    this.text = 'Hello World';
  }

  onSubmit(event) {
    // event.preventDefault();

    console.log(this.addProductForm.value);
  }

}
