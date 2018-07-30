import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionBase } from '../../components/dynamic-form/model/question-base';
import { TextboxQuestion } from '../../components/dynamic-form/model/question-textbox';
import Parse from 'parse';
import { CredentialsProvider } from '../../providers/credentials/credentials'

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
    this.questions = [



      new TextboxQuestion({
        key: 'usaername',
        label: 'username',
        value: user.getUsername(),
        required: true,
        order: 1
      }),
      new TextboxQuestion({
        key: 'name',
        label: 'nome',
        value: user.get('name'),
        required: false,
        order: 2
      }),


    ].sort((a, b) => a.order - b.order);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
