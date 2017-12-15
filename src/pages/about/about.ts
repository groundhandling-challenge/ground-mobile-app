import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, private iab: InAppBrowser) {

  }

  launch(url) {
    if (window.hasOwnProperty('cordova')) {
      this.iab.create(url);
    } else {
      window.open(url);
    }
  }

}
