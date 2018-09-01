import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {QuizzypopPage} from "../quizzypop/quizzypop";
import {ProjectmapPage} from "../projectmap/projectmap";
import {ItsusPage} from "../itsus/itsus";
import {EventsPage} from "../events/events";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loading=true;
  constructor(public navCtrl: NavController) {
    setTimeout(()=>{
      this.loading=false;
    },500);

  }

  quizzypop(){
    this.navCtrl.setRoot(QuizzypopPage);
  }

  projectmap(){
    this.navCtrl.setRoot(ProjectmapPage);
  }

  itsus(){
    this.navCtrl.setRoot(ItsusPage);
  }

  events(){
    this.navCtrl.setRoot(EventsPage);
  }
}
