import { Component } from '@angular/core';

/**
 * Generated class for the ProfileDataComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-data',
})
export class ProfileDataComponent {
  public get profileData() {
    return {
      userId: '99',
      username: 'jdoe321', 
      firstName: 'John',
      lastName: 'Doe',
      email: 'john_doe@abc.com', 
      mobile: '8888999900', 
      companyName: 'TEKSYS', 
      companyPhone: '444-222', 
      addLine1: '221B Baker Street', 
      addLine2: 'Chelsea', 
      city: 'London',
      state: 'England', 
      pincode: '9999', 
      businessCategory: 'Dective Agency',
      keywords: ['lorem', 'ipsum'],
      profilePic: './assets/imgs/profile.png'
    };
  }

  constructor() {
    console.log('Hello ProfileDataComponent Component');
  }

}
