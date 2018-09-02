import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ProjectMapProvider} from "../../../providers/project-map/project-map";
import {LaunchNavigator,LaunchNavigatorOptions } from "@ionic-native/launch-navigator";
import { InAppBrowser } from '@ionic-native/in-app-browser';


/**
 * Generated class for the ProjectmapListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projectmap-list',
  templateUrl: 'projectmap-list.html',
})
export class ProjectmapListPage {

  all_list:String[];
  year_1='2017/18';
  year_2='2018/19';
  loading=true;
  filters = 'all';

  tab_year_1:boolean;
  tab_year_2:boolean;
  tab_all=true;

  year_1_count = 0;
  year_2_count = 0;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private projectMapProvider:ProjectMapProvider,
              private launchNavigator:LaunchNavigator,
              private alertCtrl: AlertController,
              private iab: InAppBrowser) {
    this.projectMapProvider.getMarkerData().subscribe((places:any)=>{
      this.all_list =(places as String[]).reverse();
      this.all_list.forEach((val:any)=>{
        if(val.year==this.year_1){
          this.year_1_count++;
        }else{
          this.year_2_count++;
        }
      });
    });
    setTimeout(()=>{
      this.loading=false;
    },1500);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectmapListPage');
  }

  openNavigation(project){
    let alert = this.alertCtrl.create({
      title: 'Open Navigation',
      message: 'Do you want to open '+project.name+' project location navigation in your map?',
      buttons: [
        {
          text: 'Open',
          handler: () => {
            let options: LaunchNavigatorOptions = {
              destinationName:project.name
            };
            this.launchNavigator.navigate([project.lat,project.lon], options)
              .then(
                success => console.log('Launched navigator'),
                error => console.log('Error launching navigator', error)
              );
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }

      ]
    });
    alert.present();
  }

  openBrowser(project){
    let alert = this.alertCtrl.create({
      title: 'Open more details',
      message: 'Do you want to open '+project.name+' project details in your browser?',
      buttons: [
        {
          text: 'Open',
          handler: () => {
            const browser = this.iab.create(project.url,'_system');
            browser.close();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }

      ]
    });
    alert.present();

  }

  filterProjects($event){
    if($event.value=='all'){
      this.tab_all = true;
      this.tab_year_1=false;
      this.tab_year_2=false;
    }else if($event.value==this.year_1){
      this.tab_all = false;
      this.tab_year_1=true;
      this.tab_year_2=false;
    }else {
      this.tab_all = false;
      this.tab_year_1=false;
      this.tab_year_2=true;
    }
  }
}
