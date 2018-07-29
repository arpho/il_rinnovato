import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginComponent } from '../components/login/login'
import { CredentialsProvider } from '../providers/credentials/credentials';
import { DynamicFormComponent } from '../../src/components/dynamic-form/dynamic-form';
import { QuestionService } from '../components/dynamic-form/services/question.service';
import {DynamicFormQuestionComponent} from '../components/dynamic-form/components/dynamic-form/dynamic-form-question.component';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage

  ],
  providers: [
    QuestionService,

    CredentialsProvider,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CredentialsProvider
  ]
})
export class AppModule { }
