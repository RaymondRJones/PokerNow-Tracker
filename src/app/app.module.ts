import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileTabComponent } from './profile-tab/profile-tab.component';
import { PlayerTabComponent } from './player-tab/player-tab.component';

import {Chart} from 'chart.js';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileTabComponent,
    PlayerTabComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
