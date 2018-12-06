import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {QRScanner} from "@ionic-native/qr-scanner";
import {ScanQPage} from "../pages/scan-q/scan-q";
import {Camera} from "@ionic-native/camera";
import {AndroidFingerprintAuth} from "@ionic-native/android-fingerprint-auth";
import {ChatWindowPage} from "../pages/chat-window/chat-window";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {Http} from "@angular/http";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ScanQPage,
    TabsPage,
    ChatWindowPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ScanQPage,
    TabsPage,
    ChatWindowPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QRScanner,
    Camera,
    AndroidFingerprintAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
