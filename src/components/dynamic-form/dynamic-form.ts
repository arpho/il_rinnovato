import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from './model/question-base';
import { QuestionControlService } from './services/question-control.service';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.html',
  providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  @Output() submitted = new EventEmitter<any>();
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {

  }
  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    this.submitted.emit((this.payLoad))
  }
}