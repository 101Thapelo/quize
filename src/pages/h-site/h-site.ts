import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import {HSite } from'../../model/model/h-site/h-site.model';
import { QuestionAndAnswer } from '../../model/model/thapelo.model';
import{ResultPage} from'../result/result';
/**
/**
 * Generated class for the HSitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-h-site',
  templateUrl: 'h-site.html',
})
export class HSitePage {
  @ViewChild('slides') slides: Slides;
  
  hsite: any = HSite;
  submit1: boolean = false;
  result : number;
value=0;

count: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad1() {
    console.log('ionViewDidLoad HSitePage');
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
  
  if (value=='Adolf Hitler' || value=='1990' ||value=='2012' || value=='Neil Armstrong' ||value== 'Zelda Sayre'){
    this.value=this.value+20;
    console.log(this.value)
    }
  }
    openResultPage(){
      this.navCtrl.push(ResultPage, {score: this.value});
    
    
    
  }
}
