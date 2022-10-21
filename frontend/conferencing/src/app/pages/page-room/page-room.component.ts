import { NgStyle } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RemotePeersService } from 'src/app/services/remote-peers.service';
import { SignalingService } from 'src/app/services/signaling.service';

export interface Connection {
  id: string | null;
  conn: RTCPeerConnection;
}

@Component({
  selector: 'app-page-room',
  templateUrl: './page-room.component.html',
  styles: []
})
export class PageRoomComponent implements OnInit {

  servers = [
    'stun:stun.l.google.com:19302',
    'stun:stun1.l.google.com:19302',
    'stun:stun2.l.google.com:19302',
    'stun:stun3.l.google.com:19302',
    'stun:stun4.l.google.com:19302',
    'stun:stun.ekiga.net',
    'stun:stun.ideasip.com',
    'stun:stun.iptel.org',
    'stun:stun.rixtelecom.se',
    'stun:stun.schlund.de',
    'stun:stunserver.org',
    'stun:stun.softjoys.com',
    'stun:stun.voiparound.com',
    'stun:stun.voipbuster.com',
    'stun:stun.voipstunt.com',
  ]

  roomName: string | null = null;
  userName: string | null = null;
  selfStream: BehaviorSubject<MediaStream | null> = new BehaviorSubject<MediaStream | null>(null);

  remotes: Connection[] = [];


  constructor(private peerService: RemotePeersService, private signalService: SignalingService) {
    this.roomName = window.localStorage.getItem('roomname');
    this.userName = window.localStorage.getItem('username');
  }

  ngOnInit(): void {
    this.getUserMedia()
  }

  async getUserMedia(): Promise<void> {
    let mediaStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: {
        width: { min: 320, ideal: 720, max: 1280 },
        height: { min: 240, ideal: 540, max: 720 }
      }
    });
    this.selfStream.next(mediaStream);
    this.signalService.getMessageQueue().subscribe({
      next: (msg) => {
        console.log(msg);
        switch (msg.type) {
          case 'offer':
            this.peerService.createStreamAnswer(this.remotes[0].conn, msg.data);
            break;
          case 'answer':
            this.remotes[0].conn.setRemoteDescription(msg.data).then(() => {
              this.selfStream.value?.getTracks().forEach(track => {
                this.remotes[0].conn.addTrack(track);
              });
            });
            break;
          case 'candidate':
            if (msg.data != null) {
              let candidate = new RTCIceCandidate(msg.data);
              this.remotes[0].conn.addIceCandidate(candidate);
            }
            break;
          case 'text':
            break;
        }
      }
    });
    let conn = await this.peerService.createStreamOffer(mediaStream);
    this.remotes.push({ id: this.userName, conn });
  }


}
