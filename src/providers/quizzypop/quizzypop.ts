import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the QuizzypopProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuizzypopProvider {

  constructor(public http: HttpClient) {
    console.log('Hello QuizzypopProvider Provider');
  }

  getData(){
    return this.http.get("http://www.quizzypop.uomleos.org/phpOperations/mobile/getData.php");
  }

}
