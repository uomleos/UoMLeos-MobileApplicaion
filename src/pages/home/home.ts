import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {QuizzypopPage} from "../quizzypop/quizzypop";
import {ProjectmapPage} from "../projectmap/projectmap";
import {ItsusPage} from "../itsus/itsus";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

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
}
