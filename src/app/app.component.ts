import { Component } from '@angular/core';
import {Platform, App, AlertController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {Network} from "@ionic-native/network";
import {OpenNativeSettings} from "@ionic-native/open-native-settings";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  network_alert;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private app:App,
              private alertCtrl:AlertController,
              private network:Network,
              private openNativeSettings:OpenNativeSettings) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    //Hardware back button event
    platform.registerBackButtonAction(() => {

          const exit_alert = this.alertCtrl.create({
            subTitle: 'Exit from application',
            message: 'Do you want to close UoM Leos app?',
            buttons: [{
              text: 'Yes',
              handler: () => {
                platform.exitApp(); // Close this application
              }
            },{
              text: 'No',
              role: 'cancel',
              handler: () => {
                console.log('Application exit prevented!');
              }
            }]
          });
          exit_alert.present();

    });

    //Network Conn checker
    this.network_alert = this.alertCtrl.create({
      subTitle: 'No Internet Connection!',
      buttons: [{
        text: 'Open Settings',
        role: 'open',
        handler: () => {
          this.openNativeSettings.open("settings");
          this.checkConn();
        }}]
    });
    this.checkConn();

    //On disconnect event at any time
    this.disconnect();

    //On Connect event at any time
    this.connect();

  }

  //Connection check when open the app
  checkConn(){
    if (this.network.type==='none') {
      this.network_alert.present();
    }
  }

  //Disconnect event subscriber
  disconnect(){
    this.network.onDisconnect().subscribe(() => {
      this.network_alert.present();
      this.connect();
      this.disconnect();
    });

  }

  //Connect event subscriber
  connect(){
    this.network.onConnect().subscribe(() => {
      this.network_alert.dismiss();
      this.connect();
      this.disconnect();
    });
  }
}

