import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MenuPage} from'../menu/menu';
/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
  score: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.score = this.navParams.get('score');

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

  openPlayPage(){
    this.navCtrl.push(MenuPage);

}
}
