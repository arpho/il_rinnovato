import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { QuestionBase }              from './model/question-base';
import { QuestionControlService }    from './services/question-control.service';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {  

  console.log('ciao');
  }
  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
    console.log('fkjb');
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}