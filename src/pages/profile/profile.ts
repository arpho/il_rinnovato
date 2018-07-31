import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionBase } from '../../components/dynamic-form/model/question-base';
import { TextboxQuestion } from '../../components/dynamic-form/model/question-textbox';
import { DropdownQuestion } from '../../components/dynamic-form/model/question-dropdown';
import { DatePickerQuestion } from '../../components/dynamic-form/model/question-date-picker';
import Parse from 'parse';
import { CredentialsProvider } from '../../providers/credentials/credentials'
import { DatePicker } from '@ionic-native/date-picker';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  questions: QuestionBase<any>[]

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    Credentials: CredentialsProvider) {
    Parse.initialize(Credentials.getAppId(), Credentials.getJavascriptKey());
    Parse.serverURL = 'https://parseapi.back4app.com/';
    let user = Parse.User.current();
    let today = new Date();

    let tomorrow = new Date(today.getTime() + (1000 * 60 * 60 * 24))
    this.questions = [



      new TextboxQuestion({
        key: 'username',
        label: 'username',
        value: user.getUsername(),
        required: true,
        order: 1
      }),
      new TextboxQuestion({
        key: 'Cognome',
        label: 'cognome',
        value: user.get('cognome'),
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'nome',
        label: 'nome',
        value: user.get('nome'),
        required: false,
        order: 3
      }),
      new DropdownQuestion({
        key: 'sesso',
        label: 'sesso',
        value: user.get('sesso'),
        options: [
          { key: 'uomo', value: 'uomo' },
          { key: 'donna', value: 'donna' },
        ],
        order: 4
      }),
      new DatePickerQuestion({
        key: 'dob',
        label: 'Data di nascita',
        value: tomorrow,//user.get('dob'),
        required: false,
        order: 4
      }, new DatePicker()),


    ].sort((a, b) => a.order - b.order);
  }
  submit(data) {
    console.log('submitted', data)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
