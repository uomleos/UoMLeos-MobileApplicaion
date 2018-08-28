import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ItsusLatestPage} from "./itsus-latest/itsus-latest";
import {ItsusOldPage} from "./itsus-old/itsus-old";
import {HomePage} from "../home/home";

/**
 * Generated class for the ItsusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-itsus',
  templateUrl: 'itsus.html',
})
export class ItsusPage {

  tab1Root=ItsusLatestPage;
  tab2Root=ItsusOldPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItsusPage');
  }

  goHome(){
    this.navCtrl.setRoot(HomePage);
  }

}
