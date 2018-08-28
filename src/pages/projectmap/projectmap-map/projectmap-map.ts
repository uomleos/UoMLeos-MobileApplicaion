import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  Marker, GoogleMapsAnimation
} from '@ionic-native/google-maps';

import {ProjectMapProvider} from "../../../providers/project-map/project-map";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {StatusBar} from "@ionic-native/status-bar";
import {HeaderColor} from "@ionic-native/header-color";

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

  defaultMapOptions: GoogleMapOptions = {
    camera: {
      target: {
        lat: 7.8731,
        lng: 80.7718
      },
      zoom: 7.5
    },
    mapType: 'ROADMAP'
  };

  icon:any;
  public allPlaces:any;
  public year_1='2017/18';
  public year_2='2018/19';
  public places_2017_18=[];
  public places_2018_19=[];
  addingMarkers=true;
  filters = 'all';
  cameraChanged = false;

  uomleos_marker = {
    name:"Leo Club of University of Moratuwa",
    lat : 6.7968823,
    lon : 79.8995894,
    year : null,
    address:"University of Moratuwa, Bandaranayake Mawatha, Katubedda, Moratuwa."
  };

  uom_icon = {
    url: 'https://www.projectmap.uomleos.org/uomleos_marker.ico',
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public projectMapProvider:ProjectMapProvider,
              private iab: InAppBrowser,
              private alertCtrl: AlertController,
             ) {
    this.initializeMap();
    this.projectMapProvider.getMarkerData().subscribe((places:any)=>{
      this.allPlaces = places;
      this.projectMapProvider._all_projects=places;
      this.addMarkers(places);
      this.addMarker(this.uomleos_marker,this.uom_icon,GoogleMapsAnimation.BOUNCE);
    });
  }

  ionViewDidLoad() {
  }

  initializeMap() {
    this.map = GoogleMaps.create('map_canvas', this.defaultMapOptions);
    this.map.on(GoogleMapsEvent.CAMERA_MOVE).subscribe(data => {
      console.log(data);
      this.cameraChanged = true;
    });

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
        this.addMarker(project, this.icon, GoogleMapsAnimation.DROP);
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
    var temp = project.name; // generate title
    if(project.year){
      temp+=" ("+project.year+")";
    }
    let marker: Marker = this.map.addMarkerSync({
      icon: icon,
      animation: animation,
      position: {
        lat: parseFloat(project.lat),
        lng: parseFloat(project.lon)
      },
      title: temp,
      snippet: project.address
    });
    //********* below comment need to uncomment when deploying
   marker.on(GoogleMapsEvent.INFO_CLICK).subscribe(()=>{
      this.openBrowser(project);
    });
  }

  reCenter(){
    this.map.setCameraTarget(this.defaultMapOptions.camera.target);
    this.map.setCameraZoom(this.defaultMapOptions.camera.zoom);
    this.map.setCameraTilt(0);
    this.map.setCameraBearing(0);
    this.cameraChanged = false;
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
      this.addMarker(this.uomleos_marker,this.uom_icon,GoogleMapsAnimation.BOUNCE);
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
