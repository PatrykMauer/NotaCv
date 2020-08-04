import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AlertController, ModalController, ViewWillEnter } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit,ViewWillEnter {
  
  username:string;
  public user: User;

  constructor(
    private dataService: DataService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
    this.loadUser();
  }

  ionViewWillEnter() {
    this.loadUser();
  }

  loadUser() {
    this.dataService.getUser()
    .subscribe(user=> this.user=user);
  }
  // async changeUsername() {
  //   const alert = await this.alertCtrl.create({
  //     header: 'Change Username',
  //     buttons: [
  //       'Cancel',
  //       {
  //         text: 'Ok',
  //         handler: (data: any) => {
  //           this.userData.setUsername(data.username);
  //           this.getUsername();
  //         }
  //       }
  //     ],
  //     inputs: [
  //       {
  //         type: 'text',
  //         name: 'username',
  //         value: this.username,
  //         placeholder: 'username'
  //       }
  //     ]
  //   });
  //   await alert.present();
  // }
}
