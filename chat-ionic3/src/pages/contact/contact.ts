import {Component, ViewChild} from '@angular/core';
import {App, Nav, NavController} from 'ionic-angular';
import {ChatWindowPage} from "../chat-window/chat-window";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  @ViewChild("#myNav") nav: NavController;
  constructor(public navCtrl: NavController,
              public app: App) {
    console.log(this.nav);
  }
toChat() {
    this.app.getRootNav().push(ChatWindowPage);
    // this.navCtrl.push(ChatWindowPage,{name: 'id'})
}
}
