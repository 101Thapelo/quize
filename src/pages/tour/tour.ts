import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { QuestionAndAnswer } from '../../model/model/thapelo.model';
import{Tour} from'../../model/model/tour/tour.model';
import{ResultPage} from'../result/result';
/**
/**
 * Generated class for the TourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tour',
  templateUrl: 'tour.html',
})
export class TourPage {
  @ViewChild('slides') slides: Slides;
  
  tour: any = Tour;
  result : number;
value=0;
submit1: boolean = false;
count: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad4() {
    console.log('ionViewDidLoad TourPage');
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

if (value=='France' || value=='Big Ben' || value=='2560 BCE' ||value== 'Ming Dynasty' || value=='city of Agra'){
  this.value+=20;
  console.log(this.value)
  }
  
}
openResultPage(){
  this.navCtrl.push(ResultPage, {score: this.value});
}
}
