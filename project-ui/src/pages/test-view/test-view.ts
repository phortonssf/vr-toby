import { Component, ViewChild } from '@angular/core';
import { Modal, NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the TestView page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-test-view',
  templateUrl: 'test-view.html'
})
export class TestViewPage {
  @ViewChild('testSlider') testSlider: any;
cases: { id: number, name: string, images: string[] }[] = [
    { "id": 0, "name": "Available", "images": ["http://www.oralatp.com/include/images/enlarged_heart_on_chest_xray.jpg", "http://vfce.arizona.edu/sites/vfce/files/dog_pneumonia_vd_350.jpg" ]},
    { "id": 1, "name": "Ready", "images":[ "http://www.oralatp.com/include/images/enlarged_heart_on_chest_xray.jpg", "http://vfce.arizona.edu/sites/vfce/files/dog_pneumonia_vd_350.jpg"] },
    { "id": 2, "name": "Started", "images": ["http://www.oralatp.com/include/images/enlarged_heart_on_chest_xray.jpg", "http://vfce.arizona.edu/sites/vfce/files/dog_pneumonia_vd_350.jpg"]  }
];
currentIndex: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController) 
              {
   this.viewCtrl  = viewCtrl;             
  }
 onSlideChanged() {
    this.currentIndex = this.testSlider.getActiveIndex();
    console.log('onSlideChanged');
    //console.log(this.currentIndex);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TestViewPage');
  }

}
