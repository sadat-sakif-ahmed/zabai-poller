import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageRoomComponent } from './pages/page-room/page-room.component';
import { VideoPreviewComponent } from './components/video-preview/video-preview.component';
import { VideoGridComponent } from './components/video-grid/video-grid.component';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { ChatComponentComponent } from './components/chat-component/chat-component.component';
import { VideoStreamComponent } from './components/video-stream/video-stream.component';
import { PageSingleComponent } from './pages/page-single/page-single.component';
import { WebrtcModule } from './webrtc/webrtc.module';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    PageRoomComponent,
    VideoPreviewComponent,
    VideoGridComponent,
    VideoCardComponent,
    ChatComponentComponent,
    VideoStreamComponent,
    PageSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    WebrtcModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
