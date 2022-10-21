import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum Signal {
  Offer, Answer, Candidate, Acknowledge, Announce, Leave, Text, PollQuery, PollOption, PollResponse
}


@Injectable({
  providedIn: 'root'
})
export class SignalService {

  private connection !: WebSocket;
  private stateChange = new BehaviorSubject<string>('inactive');
  private messages = new BehaviorSubject<any>(null);

  constructor() {
    this.connect();
  }

  connect(host: string = '192.168.5.27:8081', room: string = 'common') {
    this.connection = new WebSocket(`ws://${host}/${room}/`);
    this.connection.onopen = (event: Event) => { this.onConnectionStateChanged('open', event); }
    this.connection.onclose = (event: CloseEvent) => { this.onConnectionStateChanged('close', event); }
    this.connection.onerror = (event: Event) => { this.onConnectionStateChanged('error', event); }
    this.connection.onmessage = (event: MessageEvent) => { this.onMessageReceived('message', event); }
  }

  getStateChanges() {
    return this.stateChange.asObservable();
  }

  getMessages() {
    return this.messages.asObservable();
  }

  sendSignal(type: Signal, data: any, recipient: string | null = null) {
    const signalData = {
      type: type,
      data: data
    };
    this.sendJson(signalData, recipient);
  }

  sendJson(data: any, recipient: string | null = null) {
    try {
      this.sendString(data, recipient);
    } catch (exception) {
      console.error(exception);
      throw exception;
    }
  }

  sendBinary(data: any, recipient: string | null = null) {
    try {
      this.connection.send(data);
    } catch (exception) {
      console.error(exception);
    }
  }

  sendString(data: string, recipient: string | null = null) {
    try {
      const stringdata = JSON.stringify({ payload: data, recipient: recipient });
      this.sendBinary(stringdata, recipient);
    } catch (exception) {
      console.error(exception);
    }
  }

  private onMessageReceived(state: string, event: MessageEvent) {
    this.messages.next(JSON.parse(event.data).payload);
  }

  private onConnectionStateChanged(state: string, event: Event) {
    this.stateChange.next(state);
  }
}
