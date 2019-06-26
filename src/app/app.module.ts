import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {PlayPage} from'../pages/play/play';
import { Component } from '@angular/core';
import {MenuPage} from'../pages/menu/menu';
import {TourPage} from'../pages/tour/tour';
import {HSitePage} from'../pages/h-site/h-site';
import {TechPage} from'../pages/tech/tech';
import {MusicPage} from '../pages/music/music';
import { FormsModule } from '@angular/forms';
import{ResultPage} from '../pages/result/result';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PlayPage,
    MenuPage,
    TourPage,
    HSitePage,
    TechPage,
    MusicPage,
    ResultPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    
FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PlayPage,
    MenuPage,
    TourPage,
    HSitePage,
    TechPage,
    MusicPage,
    ResultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
