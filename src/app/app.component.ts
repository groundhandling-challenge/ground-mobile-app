import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class GroundApp {
  rootPage:any = TabsPage;

  constructor(
    private platform: Platform,
    private translate: TranslateService,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen
  ){
    this.initTranslate();

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  private initTranslate() {
    this.translate.setDefaultLang('en');

    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use('en');
    }
  }
}
