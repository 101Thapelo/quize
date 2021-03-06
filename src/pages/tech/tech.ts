import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { QuestionAndAnswer } from '../../model/model/thapelo.model';
import {Tech } from '../../model/model/tech/tech.model';
import{ResultPage} from'../result/result';
/**
/**
 * Generated class for the TechPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tech',
  templateUrl: 'tech.html',
})
export class TechPage {
  @ViewChild('slides') slides: Slides;
  techs: any = Tech;
  
  result : number;
value=0;
submit1: boolean = false;
count: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.techs);
    
  }

  ionViewDidLoad3() {
    console.log('ionViewDidLoad TechPage');
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

if (value=='Martin Cooper' || value=='1917' ||value=='computer' || value=='9.0 Pie' || value=='Drone'){
  this.value=this.value+20;
  console.log(this.value)
  }
  
}
openResultPage(){
  this.navCtrl.push(ResultPage, {score: this.value});
}
}
