import { Component } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';
import { Page1 } from '../page1/page1';

/*
  Generated class for the Sendmoney page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sendmoney',
  templateUrl: 'sendmoney.html'
})
export class SendmoneyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalcntrl : ModalController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendmoneyPage');
  }
  openmodal() {
     let modalctrl = this.modalcntrl.create(Page1);
     modalctrl.present();
  }
}
