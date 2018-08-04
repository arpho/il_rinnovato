import { Component, Input, Output, EventEmitter } from '@angular/core';
import { QuestionBase } from '../dynamic-form/model/question-base';

/**
 * Generated class for the ProfileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})
export class ProfileComponent {
  @Input() questions: QuestionBase<any>[]
  @Output() submittedForm = new EventEmitter<any>()
  text: string;

  constructor() {
    console.log('Hello ProfileComponent Component');
    this.text = 'Hello World Profile';
  }

  submitted(data) {
    console.log('form', data)
    this.submittedForm.emit(data)
  }
}
