import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface Message {
  type: string;
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class SignalingService {

  private messages = new Subject<any>();

  socket !: WebSocket;
  url = 'ws://192.168.5.27:8081/'

  constructor() {
    this.socket = new WebSocket(this.url);
    this.socket.onopen = () => {
      console.log('WebSocket connection open');
    };
    this.socket.onmessage = (message: any) => {
      this.messages.next(JSON.parse(message.data));
    }
  }

  sendMessage(message: any) {
    this.socket.send(JSON.stringify(message));
  }

  getMessageQueue(): Observable<any> {
    return this.messages.asObservable();
  }

}
