import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message, SignalingService } from 'src/app/services/signaling.service';

@Component({
  selector: 'app-chat-component',
  templateUrl: './chat-component.component.html',
  styleUrls: []
})
export class ChatComponentComponent implements OnInit {

  messages = new BehaviorSubject<Message[]>([]);

  constructor(private signalService: SignalingService) { }

  ngOnInit(): void {
    this.signalService.getMessageQueue().subscribe({
      next: (msg) => {
        console.info(msg);
        // const val = this.messages.value;
        // val.push(msg);
        // console.log(msg);
        // this.messages.next(val);
      }
    });
  }

}
