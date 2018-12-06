import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {p} from "../../../node_modules/@angular/core/src/render3";

/**
 * Generated class for the ChatWindowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-window',
  templateUrl: 'chat-window.html',
})
export class ChatWindowPage {
  private isText: Boolean = true;
  private msgList: any;
  private socket: WebSocket;
  public currentContent: string;
  private msgObject = {
    username: '123',
    msg: 'ionic message',
    receivename: '123',
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatWindowPage');
    this.initSocket();
  }

  initSocket() {
    this.socket = new WebSocket("wss://dyzhello.club:9000");
    this.socket.onopen = () => {
      console.log('open');
    };
    this.socket.onclose = () => {
      console.log('close');
    };
    this.socket.onmessage = (e) => {
      // ToastShow.show(e);
      console.log(e.data);
    }
  }

  send() {
    this.msgObject.msg = this.currentContent;
    console.log(this.socket,this.currentContent);
    if (this.socket == undefined) {
      this.initSocket();
    }
    this.socket.send(JSON.stringify(this.msgObject));
    console.log(JSON.stringify(this.msgObject))
  }

  ionViewDidEnter() {
    console.log(this.navParams.get('name'));
    const params = {
      sendName: '123',
      receiveName: '999',
    };
    this.http.get('https://dyzhello.club/ok/getMsgListByName', {params}).subscribe(
      res => {
        console.log(res);
        this.msgList = res;
      }
    )
  }

  changeVoice() {
    if (this.isText) {
      this.isText = false;
    } else {
      this.isText = true;
    }
  }
}
