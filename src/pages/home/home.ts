import { Component } from '@angular/core';
import { NavController, Platform,MenuController } from 'ionic-angular';
import Parse from 'parse';
import { CredentialsProvider } from '../../providers/credentials/credentials';
import { QuestionService } from '../../../src/components/dynamic-form/services/question.service';
import {ProfilePage} from '../../pages/profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  result: string;
  questions: any[];
  username: string;
  message:string;

  openMenu() {
    this.menuCtrl.open();
  }
    go2Profile(ev){
      console.log('going to profile');
      this.navCtrl.push(ProfilePage);
    }
    check(){
      console.log('check');
    }
  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public Credentials: CredentialsProvider,
    public QuestionService: QuestionService,
    public menuCtrl:MenuController,
  ) {
    Parse.initialize(Credentials.getAppId(), Credentials.getJavascriptKey());
    Parse.serverURL = 'https://parseapi.back4app.com/';
    this.questions = this.QuestionService.getQuestions();
    const currentUser = Parse.User.current();
    if (currentUser)
      this.username = currentUser.getUsername();
    
    let install = new Parse.Installation();
    install.set("deviceType", this.platform.platforms().toString());

    install.save(null, {
      success: (install) => {
        // Execute any logic that should take place after the object is saved.
        //this.result = 'New object created with objectId: ' + install.id;
      },
      error: (install, error) => {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
       // this.result = ('Failed to create new object, with error code:' + error.message.toString() + " " + error.code);
      }
    });

    this.message = "benvenuto " + this.username;
  }

}
