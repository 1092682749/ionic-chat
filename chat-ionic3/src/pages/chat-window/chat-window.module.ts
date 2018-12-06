import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatWindowPage } from './chat-window';
import {Http} from "@angular/http";
import {HttpClient} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ChatWindowPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicPageModule.forChild(ChatWindowPage),
  ],
})
export class ChatWindowPageModule {}
