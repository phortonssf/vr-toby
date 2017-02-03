import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage} from '../home/home';
/*
  Generated class for the Landing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html'
})
export class LandingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
 login(){
    this.navCtrl.setRoot(HomePage)
    
  };
  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

}
