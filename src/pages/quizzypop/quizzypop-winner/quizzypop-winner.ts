import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuizzypopWinnerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quizzypop-winner',
  templateUrl: 'quizzypop-winner.html',
})
export class QuizzypopWinnerPage {

  winnerMonth:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.winnerMonth="December";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizzypopWinnerPage');
  }



}
