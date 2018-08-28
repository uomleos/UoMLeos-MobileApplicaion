import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {QuizzypopWinnerPage} from "./quizzypop-winner/quizzypop-winner";
import {QuizzypopQuestionPage} from "./quizzypop-question/quizzypop-question";
import {QuizzypopAnswerPage} from "./quizzypop-answer/quizzypop-answer";
import {HomePage} from "../home/home";

/**
 * Generated class for the QuizzypopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quizzypop',
  templateUrl: 'quizzypop.html',
})
export class QuizzypopPage {

  tab1Root = QuizzypopWinnerPage;
  tab2Root = QuizzypopQuestionPage;
  tab3Root = QuizzypopAnswerPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizzypopPage');
  }

  goHome(){
    this.navCtrl.setRoot(HomePage);
  }
}
