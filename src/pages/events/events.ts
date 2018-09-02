import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EventsProvider} from "../../providers/events/events";
import {HomePage} from "../home/home";
import {ItsusLatestPage} from "../itsus/itsus-latest/itsus-latest";
import {ItsusOldPage} from "../itsus/itsus-old/itsus-old";
import {UpcomingPage} from "./upcoming/upcoming";
import {RecentPage} from "./recent/recent";

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  tab1Root=UpcomingPage;
  tab2Root=RecentPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

  goHome(){
    this.navCtrl.setRoot(HomePage);
  }

}
