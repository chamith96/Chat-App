import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  username: string;
  password: string;

  constructor(private alertCon: AlertController, private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  alert(title, message){
  this.alertCon.create({
    title: title,
    subTitle: message,
    buttons: ['OK']
  }).present();
}

userRegister(){
  this.afAuth.auth.createUserWithEmailAndPassword(String(this.username + '@user.user'), String(this.password))
  .then(data=>{
    console.log('OK');
    this.alert('SUCCESS', 'You have created an account');
  })
  .catch(error=>{
    console.log('Error', error)
    this.alert('ERROR', 'Fill all filds');
  });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
