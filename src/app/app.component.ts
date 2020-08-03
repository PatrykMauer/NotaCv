import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Inbox',
      url: 'inbox',
      icon: 'mail'
    },
    {
      title: 'Outbox',
      url: 'outbox',
      icon: 'paper-plane'
    },
    {
      title: 'Favorites',
      url: 'favorites',
      icon: 'heart'
    },
    {
      title: 'Archived',
      url: 'archived',
      icon: 'archive'
    },
    {
      title: 'Trash',
      url: 'trash',
      icon: 'trash'
    },
    {
      title: 'Spam',
      url: 'spam',
      icon: 'warning'
    },
    {
      title: 'Gallery',
      url: '/gallery',
      icon: 'warning'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
