import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageLobbyComponent } from './pages/page-lobby/page-lobby.component';
import { PageRoomComponent } from './pages/page-room/page-room.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WebrtcRoutingModule } from './webrtc-routing.module';
import { SelfVideoComponent } from './components/self-video/self-video.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { RoomPollComponent } from './components/room-poll/room-poll.component';



@NgModule({
  declarations: [
    PageHomeComponent,
    PageLobbyComponent,
    PageRoomComponent,
    SelfVideoComponent,
    ChatBoxComponent,
    RoomPollComponent
  ],
  imports: [
    CommonModule,
    WebrtcRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class WebrtcModule { }
