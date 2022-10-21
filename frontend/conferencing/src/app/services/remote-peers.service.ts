import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SignalingService } from './signaling.service';

@Injectable({
  providedIn: 'root'
})
export class RemotePeersService {

  constructor(private signalService: SignalingService) { }

  async createOffer(conn: RTCPeerConnection) {
    let description = await conn.createOffer({ offerToReceiveAudio: true, offerToReceiveVideo: true });
    await conn.setLocalDescription(description);
    this.signalService.sendMessage({ type: 'offer', data: description });
  }

  async createAnswer(conn: RTCPeerConnection, offer: RTCSessionDescriptionInit) {
    await conn.setRemoteDescription(new RTCSessionDescription(offer));
    const answer = await conn.createAnswer({ offerToReceiveAudio: true, offerToReceiveVideo: true });
    await conn.setLocalDescription(answer);
    this.signalService.sendMessage({ type: 'answer', data: conn.localDescription });
  }


  async createStreamAnswer(conn: RTCPeerConnection, offerData: RTCSessionDescriptionInit): Promise<void> {
    await conn.setRemoteDescription(offerData);
    const desc: RTCSessionDescriptionInit = await conn.createAnswer();
    await conn.setLocalDescription(desc);
    this.signalService.sendMessage({ type: 'answer', data: conn.localDescription });
  }

  async createStreamOffer(stream: MediaStream): Promise<RTCPeerConnection> {
    let conn = this.createNewConnection();
    stream.getTracks().forEach(track => conn.addTrack(track, stream));
    let desc = await conn.createOffer({ offerToReceiveAudio: true, offerToReceiveVideo: true });
    await conn.setLocalDescription(desc);
    this.signalService.sendMessage({ type: 'offer', data: desc });
    return conn;
  }

  async establishConnection(conn: RTCPeerConnection, answerData: RTCSessionDescriptionInit, stream: MediaStream): Promise<void> {
    await conn.setRemoteDescription(answerData);
    stream.getTracks().forEach(track => {
      conn.addTrack(track, stream);
    })
  }

  createNewConnection() {
    let conn = new RTCPeerConnection({
      iceServers: [
        {
          urls: [
            'stun:stun.l.google.com:19302',
            'stun:stun1.l.google.com:19302',
            'stun:stun2.l.google.com:19302',
            'stun:stun3.l.google.com:19302',
          ]
        }
      ]
    });
    conn.onicecandidate = (event: RTCPeerConnectionIceEvent) => {
      console.info('Candidate Changed');
      this.signalService.sendMessage({
        type: 'candidate',
        data: event.candidate
      })
    }
    conn.onicegatheringstatechange = (event: Event) => {
      switch (conn.iceConnectionState) {
        case 'closed':
        case 'disconnected':
        case 'failed':
          console.error('Failed to connect');
          break;
      }
    }
    conn.onsignalingstatechange = (event: Event) => {
      console.info(event);
      switch (conn.signalingState) {
        case 'closed':
          console.error('Connection Closed');
          break;
      }
    }
    return conn;
  }


  createConnectionObject(
    onIceCandidateChange: (e: RTCPeerConnectionIceEvent) => void,
    onConnectionStateChange: (e: Event) => void
  ) {
    let conn = new RTCPeerConnection({
      iceServers: [
        {
          urls: [
            'stun:stun.l.google.com:19302',
            'stun:stun1.l.google.com:19302',
            'stun:stun2.l.google.com:19302',
            'stun:stun3.l.google.com:19302',
          ]
        }
      ]
    });
    conn.onicecandidate = (event: RTCPeerConnectionIceEvent) => {
      this.signalService.sendMessage({
        type: 'candidate',
        data: event.candidate
      })
      onIceCandidateChange(event);
    }
    conn.onicegatheringstatechange = (event: Event) => {
      console.info(event);
      switch (conn.iceConnectionState) {
        case 'closed':
        case 'disconnected':
        case 'failed':
          console.error('Failed to connect');
          break;
      }
    }
    conn.onsignalingstatechange = (event: Event) => {
      onConnectionStateChange(event);
      switch (conn.signalingState) {
        case 'closed':
          console.error('Connection Closed');
          break;
      }
    }
    return conn;
  }

}
