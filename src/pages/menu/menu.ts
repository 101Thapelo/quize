import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PlayPage} from '../play/play';
import{TourPage} from '../tour/tour';
import { HSitePage } from '../h-site/h-site';
import { TechPage } from '../tech/tech';
import{MusicPage} from '../music/music';
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  openPlayPage(){
    this.navCtrl.push(PlayPage);
  }

  openTourPage(){
    this.navCtrl.push(TourPage);
  }
  openHSitePage(){
    this.navCtrl.push(HSitePage);
  }
  openTechPage(){
    this.navCtrl.push(TechPage);
  }
  openMusicPage(){
    this.navCtrl.push(MusicPage);
  }

}
