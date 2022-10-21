import { Component, ComponentRef, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, find } from 'rxjs';
import { VideoCardComponent } from 'src/app/components/video-card/video-card.component';
import { PeerService } from '../../services/peer.service';
import { Signal, SignalService } from '../../services/signal.service';

@Component({
  selector: 'app-page-room',
  templateUrl: './page-room.component.html',
  styleUrls: []
})
export class PageRoomComponent implements OnInit {
  session: any = null;
  peers: Map<string, RTCPeerConnection | null> = new Map();
  @ViewChild('peerContainer', { read: ViewContainerRef }) peerContainer !: ViewContainerRef;

  localMedia: MediaStream | null = null;
  localStream = new BehaviorSubject<MediaStream | null>(null);

  constructor(private signal: SignalService, private peerService: PeerService) { }

  ngOnInit(): void {
    let sess = window.sessionStorage.getItem('session');
    if (sess != null) {
      this.session = JSON.parse(sess);
    }
    navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(
      (media) => {
        this.localMedia = media;
        this.localStream.next(this.localMedia);
        this.signal.getMessages().subscribe({
          next: (msg) => {
            this.handleSignals(msg);
          }
        });
        this.signal.getStateChanges().subscribe({
          next: (state: string) => {
            if (state == 'open') {
              this.signal.sendSignal(Signal.Announce, this.session);
            }
          }
        });
      });

  }

  async handleSignals(msg: any) {
    if (msg == null) { return; }
    switch (msg.type) {
      case Signal.Announce:
        console.info('Received announcement from', msg.data.username);
        this.peers.set(msg.data.username, null);
        this.sendConnectionOffer(msg.data);
        break;
      case Signal.Candidate:
        console.info('Received candidate change from', msg.data.username);
        this.handleCandidateUpdate(msg.data);
        break;
      case Signal.Offer:
        console.info('Received offer from', msg.data.username);
        this.sendConnectionAnswer(msg.data);
        break;
      case Signal.Answer:
        console.info('Received answer from', msg.data.username);
        this.handlePostAnswer(msg.data);
        break;
      // case Signal.Acknowledge:
      //   console.info('Received acknowledgement', msg.data);
      //   if (msg.data.b != this.session.username) {
      //     return;
      //   }
      //   connection = this.peers.get(msg.data.a);
      //   console.info(connection);
      //   if (connection != null) {
      //     this.peerService.attachStreams(connection, this.localMedia);
      //   }
      //   break;
    }
  }

  async sendConnectionOffer(target: any) {
    let connection = this.peerService.createConnection(this.session.username);
    this.peers.set(target.username, connection);
    console.info(this.peers);
    await this.peerService.makeOffer(connection, this.session.username);
  }

  async sendConnectionAnswer(target: any) {
    let connection = this.peers.get(target.username)
    if (connection == undefined) {
      connection = this.peerService.createConnection(this.session.username);
      this.peers.set(target.username, connection);
      console.warn('Connection not found for', target.username, this.peers);
    }
    await this.peerService.attachStreams(connection, this.localMedia);
    await this.peerService.sendAnswer(connection, target.desc, target.username);
    connection.ontrack = (evt: RTCTrackEvent) => {
      console.info('Got track from');
    }
    this.signal.sendSignal(Signal.Acknowledge, { a: this.session.username, b: target.username });
  }

  async handlePostAnswer(target: any) {
    let connection = this.peers.get(target.username)
    if (connection == undefined) {
      return;
    }
    connection.ontrack = (evt: RTCTrackEvent) => {
      console.warn('Track Updated', evt);
    }
  }

  async handleCandidateUpdate(target: any) {
    let connection = this.peers.get(target.username);
    if (connection == undefined) {
      console.warn('Connection not found for', target.username, this.peers);
      return;
    }
    console.log(target);
    await this.peerService.updateCandidates(connection, target.candidate);
  }

}
