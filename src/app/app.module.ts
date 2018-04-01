import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';
import { RegisterPage } from '../pages/register/register';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDvuX3ThhMvEEMgXLCMP7PoG9K-N2bgjRs",
    authDomain: "ionic-chat-4d89b.firebaseapp.com",
    databaseURL: "https://ionic-chat-4d89b.firebaseio.com",
    projectId: "ionic-chat-4d89b",
    storageBucket: "ionic-chat-4d89b.appspot.com",
    messagingSenderId: "782281348605"
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
