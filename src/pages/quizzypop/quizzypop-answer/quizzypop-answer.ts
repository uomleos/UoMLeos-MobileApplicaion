import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, Validators} from "@angular/forms";
import {AnswerValidations} from "./validations";
import {QuizzypopProvider} from "../../../providers/quizzypop/quizzypop";

/**
 * Generated class for the QuizzypopAnswerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quizzypop-answer',
  templateUrl: 'quizzypop-answer.html',
})
export class QuizzypopAnswerPage {

  form;
  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder:FormBuilder,
              private quizzypopProvider:QuizzypopProvider,
              public loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {
    //Form initialize
    this.form = this.formBuilder.group({
      month: ['', [Validators.required,AnswerValidations.month]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      contact: ['', [Validators.required,AnswerValidations.contactNumber,AnswerValidations.contactLength]],
      answer: ['', [Validators.required]]
    });
  }

  ionViewDidLoad() {

  }

submit(){
    //show loading
  const loading = this.loadingCtrl.create({
    spinner: 'crescent',
  });
  loading.present();

  //Submission successful alert
  let alert = this.alertCtrl.create({
    title: `<img src="../../../assets/imgs/quizzypop/quizzy_logo.png">`,
    subTitle: 'Answer Submitted!',
    message: `<p>Thank you for being with QuizzyPop!</p>`,
    buttons: ['Okay']
  });
    this.quizzypopProvider.submitAnswer(this.form.value).subscribe((data)=>{
      setTimeout(()=>{
        loading.dismiss();
        alert.present();
      },1000);
    });

}

  //Properties

  get answer(){
    return this.form.get('answer');
  }

  get contact(){
    return this.form.get('contact');
  }

  get name(){
    return this.form.get('name');
  }

  get month(){
    return this.form.get('month');
  }

  get email(){
    return this.form.get('email');
  }

}
