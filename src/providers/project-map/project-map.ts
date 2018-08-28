import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProjectMapProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProjectMapProvider {

  public _all_projects:any;
  public _year_1_list:any;
  public _year_2_list:any;

  constructor(public http: HttpClient) {

  }

  getMarkerData(){
    return this.http.get("https://www.projectmap.uomleos.org/submit/files/get.php");
  }



}
