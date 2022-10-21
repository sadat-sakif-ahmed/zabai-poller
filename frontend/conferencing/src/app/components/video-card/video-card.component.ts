import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: []
})
export class VideoCardComponent implements OnInit {

  @Input() index: number = 0;
  @Input() peer!: any;

  @ViewChild('vidStream', { static: true }) vidStream !: ElementRef<HTMLVideoElement>;

  @Input() stream: MediaStream | null = null;

  constructor() { }

  ngOnInit(): void { }

  startTracking(peer: any): void {
    this.peer = peer;
    console.warn('Listening for track changes on:', peer.id);
    this.peer.conn.ontrack = (event: RTCTrackEvent) => {
      console.warn('Getting Tracks', event);
      this.vidStream.nativeElement.srcObject = event.streams[0];
    };
  }

}
