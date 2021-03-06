import {  Component } from '@angular/core';
import { Modal, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home'
import { TabsPage } from '../pages/tabs/tabs';
import { TestViewPage } from '../pages/test-view/test-view';
import { LandingPage } from '../pages/landing/landing';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
