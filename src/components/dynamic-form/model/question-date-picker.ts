import { QuestionBase } from './question-base';
import { DatePicker } from '@ionic-native/date-picker'

export class DatePickerQuestion extends QuestionBase<string> {
  controlType = 'date';
  options: { key: string, value: Date }[] = [];
  date: string
  value: string

  constructor(options: { value?: string, label?: string, required?: boolean, key?: string, order?: number } = {},
  ) {
    super(options);
    this.options = options['options'] || [];
    this.value = new Date(options.value).toISOString();

  }
}