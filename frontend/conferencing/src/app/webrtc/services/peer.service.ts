import { Injectable } from '@angular/core';
import { Signal, SignalService } from './signal.service';

@Injectable({
  providedIn: 'root'
})
export class PeerService {

  local !: RTCPeerConnection;
  stream !: MediaStream;

  constructor(private signal: SignalService) {
    // this.local = this.createConnection();
    // this.signal.getMessages().subscribe({
    //   next: this.handleSignals
    // });
  }

  setStream(stream: MediaStream) {
    this.stream = stream;
  }

  handleSignals(msgs: any) {
    // switch (msgs.type) {
    //   case Signal.Offer:
    //     this.sendAnswer(this.local, msgs.data);
    //     break;
    //   case Signal.Answer:
    //     this.attachStreams(this.local, this.stream);
    //     break;
    //   case Signal.Acknowledge:
    //     break;
    // }
  }

  createConnection(target: string | null) {
    let connection = new RTCPeerConnection();
    connection.onicecandidate = (ev: RTCPeerConnectionIceEvent) => {
      console.info('');
      this.signal.sendSignal(Signal.Candidate, { candidate: ev.candidate?.toJSON(), username: target });
    }
    connection.onconnectionstatechange = (ev: Event) => {
      console.warn('Connection state changed to', connection.connectionState);
    }
    return connection;
  }

  async makeOffer(connection: RTCPeerConnection | null = null, id: string | null = null) {
    if (connection == null) {
      connection = this.createConnection(id);
    }
    let description = await connection.createOffer({ offerToReceiveAudio: true, offerToReceiveVideo: true });
    await connection.setLocalDescription(description);
    this.signal.sendSignal(Signal.Offer, { desc: connection.localDescription?.toJSON(), username: id });
  }

  async sendAnswer(connection: RTCPeerConnection, offer: RTCSessionDescriptionInit, id: string | null) {
    // console.log(connection, offer, id)
    await connection.setRemoteDescription(new RTCSessionDescription(offer));
    let answer = await connection.createAnswer();
    await connection.setLocalDescription(answer);
    this.signal.sendSignal(Signal.Answer, { desc: answer, username: id });
  }

  async attachStreams(connection: RTCPeerConnection, stream: MediaStream | null) {
    if (stream == null) {
      return;
    }
    stream.getTracks().forEach((track) => { connection.addTrack(track) });
    // console.log(connection);
    // if (connection.connectionState == 'connected') {
    //   stream.getTracks().forEach(track => connection.addTrack(track));
    // } else {
    //   connection.onconnectionstatechange = (ev: Event) => {
    //     // console.log(ev.currentTarget, connection.connectionState);
    //     if (connection.connectionState == 'connected') {
    //       stream.getTracks().forEach(
    //         track => connection.addTrack(track)
    //       );
    //     }
    //   }
    // }
  }

  async updateCandidates(connection: RTCPeerConnection, candidate: any) {
    if (connection.remoteDescription == null) {
      console.log('Remote Description null');
      return;
    }
    if (candidate == null) { return; }
    // console.log('Adding candidate: ', connection, candidate);
    await connection.addIceCandidate(new RTCIceCandidate(candidate));
  }
}
