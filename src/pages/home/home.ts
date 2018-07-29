import { Component } from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import Parse from 'parse';
import {CredentialsProvider} from '../../providers/credentials/credentials'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  result: string;

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public Credentials:CredentialsProvider
  ) {
    Parse.initialize(Credentials.getAppId(), Credentials.getJavascriptKey());
    Parse.serverURL = 'https://parseapi.back4app.com/';

    let install = new Parse.Installation();
    install.set("deviceType", this.platform.platforms().toString());

    install.save(null, {
      success: (install) => {
        // Execute any logic that should take place after the object is saved.
        this.result = 'New object created with objectId: ' + install.id;
      },
      error: (install, error) => {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        this.result = ('Failed to create new object, with error code:' + error.message.toString()+ " "+error.code);
      }
    });
  }

}
