import {AbstractControl, ValidationErrors} from '@angular/forms';

//Custom answer form validations
export class AnswerValidations{
  constructor(){}


  static month(control: AbstractControl){
  let months=["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    if(months.indexOf((control.value as string).toLowerCase())<=-1){
      return {monthError : true}
    }
    return false;
  }

  static contactNumber(control: AbstractControl){
    if(!Number(control.value as string)){
      return {contactNumber : true}
    }
    return false;
  }

  static contactLength(control: AbstractControl){
    if((control.value as string).length!=10){
      return {contactLength : true}
    }
    return false;
  }

}
