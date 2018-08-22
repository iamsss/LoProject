import { DataServiceProvider } from './../providers/data-service/data-service';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  pages: any;
  showLevel1 = null;
  showLevel2 = null;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, dataService: DataServiceProvider) {
     dataService.getMenus()
    .subscribe((response)=> {
        this.pages = response;
        console.log(this.pages);
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  toggleLevel1(idx) {
    if (this.isLevel1Shown(idx)) {
      this.showLevel1 = null;
    } else {
      this.showLevel1 = idx;
    }
  };
  
  toggleLevel2(idx) {
    if (this.isLevel2Shown(idx)) {
      this.showLevel1 = null;
      this.showLevel2 = null;
    } else {
      this.showLevel1 = idx;
      this.showLevel2 = idx;
    }
  };

  isLevel1Shown(idx) {
    return this.showLevel1 === idx;
  };
  
  isLevel2Shown(idx) {
    return this.showLevel2 === idx;
  };
}
