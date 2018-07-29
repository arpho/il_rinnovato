import { Component, Input,OnInit } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { QuestionBase }     from '../../model/question-base';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent implements OnInit {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  get isValid() { 
    return this.form.controls[this.question.key].valid; }
  ngOnInit(){
    console.log(this.question);
  }
}