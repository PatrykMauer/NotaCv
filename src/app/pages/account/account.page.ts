import { Component, OnInit, AfterViewInit } from '@angular/core';
import {UserData} from '../../providers/user-data';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements AfterViewInit {
  username:string;

  constructor(
    public alertCtrl: AlertController,
    public userData: UserData
    ) { }

  ngAfterViewInit() {
    this.getUsername();
  }

  getUsername(){
    this.username = this.userData.getUsername();
  }

  async changeUsername() {
    const alert = await this.alertCtrl.create({
      header: 'Change Username',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: any) => {
            this.userData.setUsername(data.username);
            this.getUsername();
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'username',
          value: this.username,
          placeholder: 'username'
        }
      ]
    });
    await alert.present();
  }
}
