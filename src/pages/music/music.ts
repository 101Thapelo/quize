import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Music } from '../../model/model/music/music.model';
import { QuestionAndAnswer } from '../../model/model/thapelo.model';
import{ResultPage} from'../result/result';
/**
/**
 * Generated class for the MusicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-music',
  templateUrl: 'music.html',
})
export class MusicPage {
  @ViewChild('slides') slides: Slides;

 musics: any = Music;


result : number;
value=0;
submit1: boolean = false;
  count: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad2() {
    

    console.log('ionViewDidLoad MusicPage');
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayPage');
    this.slides.lockSwipeToPrev(true);
  }


  
  next(value,k) {
    
    this.count += 1;
    
    console.log(value,k);
    if(this.count == 4)
      {
          this.submit1 = true;    
      }
  
this.slides.slideNext();


if  (value=='mickeal jackson' ||value== 'house' ||value=='Hillsong' || value=='Sicko mode' ||value== '54'){
  this.value=this.value+20; 
  console.log(this.value) 
  }
  
}
openResultPage(){
  this.navCtrl.push(ResultPage, {score: this.value});
}
}


