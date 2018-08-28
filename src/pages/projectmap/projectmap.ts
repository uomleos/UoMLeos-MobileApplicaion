import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProjectmapMapPage} from "./projectmap-map/projectmap-map";
import {ProjectmapListPage} from "./projectmap-list/projectmap-list";
import {HomePage} from "../home/home";

/**
 * Generated class for the ProjectmapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projectmap',
  templateUrl: 'projectmap.html',
})
export class ProjectmapPage {

  tab1Root = ProjectmapMapPage;
  tab2Root = ProjectmapListPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectmapPage');
  }

  goHome(){
    this.navCtrl.setRoot(HomePage);
  }
}
