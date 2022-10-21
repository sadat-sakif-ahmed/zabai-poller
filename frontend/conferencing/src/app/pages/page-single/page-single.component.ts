import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RemotePeersService } from 'src/app/services/remote-peers.service';
import { SignalingService } from 'src/app/services/signaling.service';

@Component({
  selector: 'app-page-single',
  templateUrl: './page-single.component.html',
  styleUrls: []
})
export class PageSingleComponent implements OnInit {

  @ViewChild('localVideo', { static: true }) localVideo !: ElementRef<HTMLVideoElement>;
  @ViewChild('remoteVideo', { static: true }) remoteVideo !: ElementRef<HTMLVideoElement>;

  localStream !: MediaStream;
  connection !: RTCPeerConnection;

  constructor(private peerConnection: RemotePeersService, private signal: SignalingService) { }

  ngOnInit(): void {
    if (this.connection == undefined) {
      this.connection = this.peerConnection.createNewConnection();
    }
    this.signal.getMessageQueue().subscribe({
      next: (msg) => {
        switch (msg.type) {
          case 'offer':
            this.connection.ontrack = (e: RTCTrackEvent) => {
              this.remoteVideo.nativeElement.srcObject = e.streams[0];
            }
            this.localStream.getTracks().forEach(track => {
              this.connection.addTrack(track, this.localStream);
            })
            this.peerConnection.createAnswer(this.connection, msg.data);
            break;
          case 'answer':
            this.connection.setRemoteDescription(msg.data).then(() => {
            });
            break;
          case 'stream':
            this.localStream.getTracks().forEach(track => {
              this.connection.addTrack(track, this.localStream);
            })
            break;
          case 'candidate':
            if (msg.data != null) {
              let candidate = new RTCIceCandidate(msg.data);
              this.connection.addIceCandidate(candidate);
            }
            break;
        }
      }
    })
  }

  async startMedia() {
    this.localStream = await navigator.mediaDevices.getUserMedia({
      audio: true, video: true
    });
    this.localVideo.nativeElement.srcObject = this.localStream;
  }

  async call() {
    this.connection = await this.peerConnection.createNewConnection();
    this.localStream.getTracks().forEach(track => {
      this.connection.addTrack(track, this.localStream);
      this.connection.ontrack = (e: RTCTrackEvent) => {
        console.log(e.streams.length);
        this.remoteVideo.nativeElement.srcObject = e.streams[0];
      }
    })
    await this.peerConnection.createOffer(this.connection);
  }

  hangup() {

  }

}
