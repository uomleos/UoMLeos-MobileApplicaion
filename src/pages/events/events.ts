import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EventsProvider} from "../../providers/events/events";

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

  events;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private eventsProvider:EventsProvider) {
    eventsProvider.getRecent().subscribe((data:any)=>{
      this.events = data.content.rendered;
      console.log(data);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }



}
