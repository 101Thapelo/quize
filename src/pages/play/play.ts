import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Button } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import {Play} from '../../model/model/play.model.ts/play.model';
import { QuestionAndAnswer } from '../../model/model/thapelo.model';
import{ResultPage} from'../result/result';
/**
 * Generated class for the PlayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-play',
  templateUrl: 'play.html',

})

export class PlayPage {
  @ViewChild('slides') slides: Slides;
  play: any = Play;

  result : number;
value=0;

  disabled = 'disabled';

  submit1: boolean = false;
  count: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayPage');
    this.slides.lockSwipeToPrev(true);
  }

next(value,k) {
    
  this.count += 1;
  
  console.log(k);
  if(this.count == 4)
    {
        this.submit1 = true;    
    }

    
  
this.slides.slideNext();

if (value=='Borussia Dortmund' || value=='2010' ||value=='Lewis Hamilton' || value=='11' || value=='Real Madrid'){
  this.value=this.value+20;
  console.log(this.value)
  }
  
}

openResultPage(){
  this.navCtrl.push(ResultPage, {score: this.value});
}


}
