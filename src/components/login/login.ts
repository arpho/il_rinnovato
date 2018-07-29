import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { Parse } from 'parse';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {

  username: string;
  password; string;
  email: string;
  text: string;
  @Input() redirectPage: any;

  signUp() {
    var user = new Parse.User();
    user.set('username',this.username);
    user.set('email',this.email);
    user.set('password',this.password);
    user.signUp(null,{uccess:(user)=>{
      this.username = '';
      this.password = '';
      this.toastCtrl.create({
        message: 'Account created successfully',
        duration: 3000
      }).present();

    },error:(user,error)=>{

      this.username = '';
      this.password = '';
      this.toastCtrl.create({
        message: 'error creating account: '+error.message,
        duration: 3000
      }).present();
    }
    });
  }

  signIn() {
    Parse.User.logIn(this.username, this.password).then((resp) => {
      console.log('Logged in successfully', resp);

      // If you app has Tabs, set root to TabsPage
      this.navCtrl.setRoot(this.redirectPage)
    }, err => {
      console.log('Error logging in', err);

      this.toastCtrl.create({
        message: err.message,
        duration: 2000
      }).present();
    });
  }

  constructor(public toastCtrl: ToastController,
    public navCtrl: NavController
  ) {
    var currentUser = Parse.User.current();
    if (currentUser && this.redirectPage)
      this.navCtrl.push(this.redirectPage);

  }

}
