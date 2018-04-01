import { Component} from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username: string;
  password: string;

  constructor(private alertCon: AlertController, private afAuth: AngularFireAuth, public navCtrl: NavController) {

  }

  openRegisterPage(){
    this.navCtrl.push(RegisterPage);
  }

    alert(title, message){
    this.alertCon.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  openChatPage(){
    this.afAuth.auth.signInWithEmailAndPassword(String(this.username + '@user.user'), String(this.password))
    .then(data=>{
      console.log('loged in');
      this.navCtrl.push(ChatPage, {
        username: this.username,
      });
    })
    .catch(error=>{
      console.log('Error', error)
    this.alert('ERROR!', 'password or Email is wrong');
    });
  }
}
