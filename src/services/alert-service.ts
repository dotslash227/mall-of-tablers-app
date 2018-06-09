import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class AlertService {

    constructor(private alertCtrl: AlertController) {

    }

    presentAlert(title, subTitle) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['Dismiss']
        });
        alert.present();
    }

}