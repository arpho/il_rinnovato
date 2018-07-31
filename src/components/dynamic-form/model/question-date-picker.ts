import { QuestionBase } from './question-base';
import { DatePicker } from '@ionic-native/date-picker'

export class DatePickerQuestion extends QuestionBase<string> {
  controlType = 'date';
  options: { key: string, value: string }[] = [];
  date: Date

  constructor(options: {} = {},
    public datePicker: DatePicker
  ) {
    super(options);
    this.options = options['options'] || [];
    this.date = new Date(options.value);
    this.datePicker = new DatePicker();
    this.datePicker.show({
      date: this.date,
      mode: 'date',

    }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
    );

  }
}