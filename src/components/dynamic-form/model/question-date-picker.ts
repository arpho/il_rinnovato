import { QuestionBase } from './question-base';
import { DatePicker } from '@ionic-native/date-picker'

export class DatePickerQuestion extends QuestionBase<Date> {
  controlType = 'date';
  options: { key: string, value: Date }[] = [];
  date: Date
  value: Date

  constructor(options: { value?: Date, label?: string, required?: boolean, key?: string, order?: number } = {},
  ) {
    super(options);
    this.options = options['options'] || [];
    this.value = new Date(options.value);
    console.log('oii')

  }
}