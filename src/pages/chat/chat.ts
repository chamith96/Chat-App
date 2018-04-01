import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  username: string;
  message: string;
  messageDisplay: Observable<any[]>;

  constructor(private db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.username = this.navParams.get('username');
    this.messageDisplay = db.list('chat').valueChanges();     //Display Realtime messages
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  //set message data to NOSQL database
  sendMessage(){
    this.db.list('chat').push({
       username: this.username,
       message: this.message
     });
  }

}
