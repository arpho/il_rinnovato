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
  user: Parse.User
  nome: string

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    Credentials: CredentialsProvider) {
    Parse.initialize(Credentials.getAppId(), Credentials.getJavascriptKey());
    Parse.serverURL = 'https://parseapi.back4app.com/';
    this.user = Parse.User.current();
    let today = new Date();
    let tomorrow = new Date(today.getTime() + (1000 * 60 * 60 * 24))
    this.questions = [



      new TextboxQuestion({
        key: 'username',
        label: 'Username',
        value: this.user.getUsername(),
        required: true,
        order: 1
      }),
      new TextboxQuestion({
        key: 'cognome',
        label: 'Cognome',
        value: this.user.get('cognome'),
        required: false,
        order: 2
      }),
      new TextboxQuestion({
        key: 'nome',
        label: 'Nome',
        value: this.user.get('nome'),
        required: false,
        order: 3
      }),
      new DropdownQuestion({
        key: 'sesso',
        label: 'Sesso',
        value: this.user.get('sesso'),
        options: [
          { key: 'uomo', value: 'uomo' },
          { key: 'donna', value: 'donna' },
        ],
        order: 4
      }),
      new DatePickerQuestion({
        key: 'dob',
        label: 'Data di nascita',
        value: new Date(this.user.get('dob')).toISOString(),
        required: true,
        order: 5
      })


    ].sort((a, b) => a.order - b.order);
    console.log(this.questions)
  }
  submitted(data) {
    this.user.set('nome', data.nome);
    this.user.set('cognome', data.cognome)
    this.user.set('sesso', data.sesso)
    this.user.set('dob', data.dob)
    this.user.save()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
