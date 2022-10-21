import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Signal, SignalService } from '../../services/signal.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: []
})
export class ChatBoxComponent implements OnInit {

  @Input() username = '';

  chatMessage: string = '';

  messages = new BehaviorSubject<any[]>([]);

  constructor(private signal: SignalService) { }

  ngOnInit(): void {
    this.signal.getMessages().subscribe({
      next: (msg) => {
        switch (msg.type) {
          case Signal.Text:
            let msgs = this.messages.value;
            msgs.push(msg.data);
            this.messages.next(msgs);
        }

      }
    });
  }

  sendMessage() {
    this.signal.sendSignal(Signal.Text, { from: this.username, msg: this.chatMessage });
    this.chatMessage = '';
  }

}
