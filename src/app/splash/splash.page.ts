import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage {
  constructor(private navCtrl: NavController) {}
  ionViewDidEnter() {
    setTimeout(() => {
      this.navCtrl.navigateForward('/login');
    }, 3000);
  }
}
