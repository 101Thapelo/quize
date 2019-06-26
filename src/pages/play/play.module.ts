import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayPage } from './play';
import { Component } from '@angular/core';
@NgModule({
  declarations: [
    PlayPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayPage),
  ],
})
export class PlayPageModule {}
