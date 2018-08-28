import {Component, ElementRef, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';

import {ProjectMapProvider} from "../../../providers/project-map/project-map";
import {InAppBrowser} from "@ionic-native/in-app-browser";

/**
 * Generated class for the ProjectmapMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-projectmap-map',
  templateUrl: 'projectmap-map.html',
})
export class ProjectmapMapPage {
  map:GoogleMap;
  icon:any;
  public allPlaces:any;
  public year_1='2017/18';
  public year_2='2018/19';
  public places_2017_18=[];
  public places_2018_19=[];
  addingMarkers=true;
  filters = 'all';
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public projectMapProvider:ProjectMapProvider,
              private iab: InAppBrowser,
              private alertCtrl: AlertController) {
    this.initializeMap();
    this.projectMapProvider.getMarkerData().subscribe((places:any)=>{
      this.allPlaces = places;
      this.projectMapProvider._all_projects=places;
      this.addMarkers(places);
    });
  }

  ionViewDidLoad() {
  }

  initializeMap() {
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 7.8731,
          lng: 80.7718
        },
        zoom: 7.5
      },
      mapType: 'ROADMAP'
    };
    this.map = GoogleMaps.create('map_canvas', mapOptions);
  }

  addMarkers(places:any){
    this.addingMarkers = true;
    let temp_1 = [];
    let temp_2 = [];
    for (let place in places) {
      let project = (places[place]);
      if(project.year==this.year_1){

        temp_1.push(project);
        this.icon = {
          url: 'https://www.projectmap.uomleos.org/marker_icon_2017_18.ico',
        };
      }else{
        temp_2.push(project);
          this.icon = {
            url: 'https://www.projectmap.uomleos.org/marker_icon_2018_19.ico',
          };
      }
        this.addMarker(project, this.icon, "DROP");
    }
    if(temp_1.length!=0) {
      this.places_2017_18 = temp_1;
      this.projectMapProvider._year_1_list = this.places_2017_18;
    }
    if(temp_2.length!=0) {
      this.places_2018_19 = temp_2;
      this.projectMapProvider._year_2_list = this.places_2018_19;

    }

    setTimeout(()=>{
      this.addingMarkers = false;
    },1500);

  }

  addMarker(project,icon,animation){
    let marker: Marker = this.map.addMarkerSync({
      icon: icon,
      animation: animation,
      position: {
        lat: parseFloat(project.lat),
        lng: parseFloat(project.lon)
      },
      title: project.name+" ("+project.year+")" , // generate title

    });

    //********* below comment need to uncomment when deploying
   marker.on(GoogleMapsEvent.INFO_CLICK).subscribe(()=>{
      this.openBrowser(project);
    });
  }

  filterProjects($event){
    this.map.clear().then(()=>{
      if($event.value==this.year_1){
        this.addMarkers(this.places_2017_18);
      }
      else if($event.value==this.year_2){
        this.addMarkers(this.places_2018_19);
      }
      else {
        this.addMarkers(this.allPlaces);
      }
    });

  }

  openBrowser(project){
    let alert = this.alertCtrl.create({
      title: 'Open more details',
      message: 'Do you want to open '+project.name+' project details in your browser?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Open',
          handler: () => {
            const browser = this.iab.create(project.url,'_system');
            browser.close();
          }
        }
      ]
    });
    alert.present();

  }
}
