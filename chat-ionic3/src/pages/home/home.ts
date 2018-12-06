import { Component } from '@angular/core';
import {App, NavController} from 'ionic-angular';
import {QRScanner, QRScannerStatus} from "@ionic-native/qr-scanner";
import {ScanQPage} from "../scan-q/scan-q";
import {Camera, CameraOptions} from "@ionic-native/camera";
import {AndroidFingerprintAuth} from "@ionic-native/android-fingerprint-auth";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private qrScanner: QRScanner,
              public app: App,
              private androidFingerprintAuth: AndroidFingerprintAuth,) {

  }
  // 能否进入page
  ionViewCanEnter(): boolean {
    this.qrScanner;
    console.log('1 ', ' ionViewCanEnter');
    return true;
  }
  // 完成加载
  ionViewDidLoad() {
    console.log('2 ', ' ionViewDidLoad');
  }
  // 将要进入
  ionViewWillEnter() {
    console.log('3 ', ' ionViewWillEnter');
    this.androidFingerprintAuth.isAvailable()
      .then((result)=> {
        if(result.isAvailable){
          // it is available

          this.androidFingerprintAuth.encrypt({ clientId: 'myAppName', username: 'myUsername', password: 'myPassword' })
            .then(result => {
              if (result.withFingerprint) {
                ToastShow.show('Successfully encrypted credentials.');
                ToastShow.show('Encrypted credentials: ' + result.token);
              } else if (result.withBackup) {
                ToastShow.show('Successfully authenticated with backup password!');
              } else ToastShow.show('Didn\'t authenticate!');
            })
            .catch(error => {
              if (error === this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
                ToastShow.show('Fingerprint authentication cancelled');
              } else console.error(error)
            });

        } else {
          // fingerprint auth isn't available
        }
      })
      .catch(error => console.error(error));
  }
  // 进入
  ionViewDidEnter() {
    console.log('4 ', ' ionViewDidEnter');
    this.app.getRootNavs().forEach(nav => {
      nav.getViews().forEach(view => {
        console.log(' index:' + view.index, ',  id: ' + view.id, ',  name:' + view.name);
      });
    });

  }
  // 能否离开page
  ionViewCanLeave(): boolean {
    console.log('5 ', ' ionViewCanLeave');
    return true;
  }
  // 将要离开
  ionViewWillLeave() {
    console.log('6 ', ' ionViewWillLeave');
  }
  // 离开
  ionViewDidLeave() {
    console.log('7 ', ' ionViewDidLeave');
  }
  // 将要退出page
  ionViewWillUnload() {
    console.log('8 ', ' ionViewWillUnload');
  }
  send() {
    nettyChannel.write('Hello Cordova');
  }
  scan() {
    this.navCtrl.push(ScanQPage);
  }
  ll() {
    console.log("============== call plugin method");
    callbackLocation.callbackLocation();
  }

}
