import { Component } from '@angular/core';
import { NavController, Platform, MenuController } from 'ionic-angular';
import Parse from 'parse';
import { CredentialsProvider } from '../../providers/credentials/credentials';
import { QuestionService } from '../../../src/components/dynamic-form/services/question.service';
import { ProfilePage } from '../../pages/profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  showBtn: boolean = false;
  deferredPrompt;
  result: string;
  questions: any[];
  username: string;
  message: string;

  ionViewWillEnter() {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later on the button event.
      this.deferredPrompt = e;

      // Update UI by showing a button to notify the user they can add to home screen
      this.showBtn = true;
    });

    //button click event to show the promt

    window.addEventListener('appinstalled', (event) => {
      alert('installed');
    });


    if (window.matchMedia('(display-mode: standalone)').matches) {
      alert('display-mode is standalone');
    }
  }

  add_to_home(e) {
    debugger
    // hide our user interface that shows our button
    // Show the prompt
    this.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    this.deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          alert('User accepted the prompt');
        } else {
          alert('User dismissed the prompt');
        }
        this.deferredPrompt = null;
      });
  };



  openMenu() {
    this.menuCtrl.open();
  }
  go2Profile(ev) {
    console.log('going to profile');
    this.navCtrl.push(ProfilePage);
  }
  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public Credentials: CredentialsProvider,
    public QuestionService: QuestionService,
    public menuCtrl: MenuController,
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
