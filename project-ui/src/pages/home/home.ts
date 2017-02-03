import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { TestViewPage } from '../test-view/test-view';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pushPage: any;
  
  //Mock data to display different levels on LobbyPage
  mockSlides: any = [
    { level: 1, completedNumber: 4, totalNumber: 8},
    { level: 2, completedNumber: 2, totalNumber: 8},
    { level: 3, completedNumber: 0, totalNumber: 8},
    { level: 4, completedNumber: 0, totalNumber: 8}
    ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.pushPage = TestViewPage;
  }

  ionViewDidLoad() {
  }

}

