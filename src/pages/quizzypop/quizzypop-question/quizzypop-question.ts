import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {QuizzypopProvider} from "../../../providers/quizzypop/quizzypop";

/**
 * Generated class for the QuizzypopQuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quizzypop-question',
  templateUrl: 'quizzypop-question.html',
})
export class QuizzypopQuestionPage {

  questionData:any;
  loading = true;
  constructor(public navCtrl: NavController, public navParams: NavParams,private quizzyPopProvider:QuizzypopProvider) {
    quizzyPopProvider.getData().subscribe((data:any)=>{
      this.questionData = data;
    });
    setTimeout(()=>{
      this.loading = false;
    },1500);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizzypopQuestionPage');
  }

}
