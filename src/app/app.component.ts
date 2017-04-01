import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { SendmoneyPage }  from '../pages/sendmoney/sendmoney';
import { RecievemoneyPage } from '../pages/recievemoney/recievemoney';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SendmoneyPage;

  pages: Array<{title: string, component: any, img:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Send Money', component: SendmoneyPage ,img:"img/home.svg"},
      { title: 'Transactions', component: Page2 ,img: "img/bookmark.svg"},
      { title: 'Payment Methods', component: Page2 ,img: "img/wallet.svg"},
      { title: 'Cash Out', component: Page2 ,img: "img/bank.svg"},
      { title: 'Settings', component: Page2 ,img: "img/settings.svg"}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
