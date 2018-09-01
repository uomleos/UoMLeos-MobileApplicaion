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

  submitAnswer(data){
    var headers = new Headers();
    headers.append('Content-Type', 'application/X-www-form=urlencoded');
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");

    return this.http.post("http://quizzypop.uomleos.org/phpOperations/submitAnswerMobile.php",data);
  }

}
