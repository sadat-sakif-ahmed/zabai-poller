import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Signal, SignalService } from '../../services/signal.service';

@Component({
  selector: 'app-room-poll',
  templateUrl: './room-poll.component.html',
  styleUrls: ['./room-poll.component.scss']
})
export class RoomPollComponent implements OnInit {

  @Input() username: string = '';
  @Input() roomname: string = '';

  pollQuestion: string = '';
  pollOption: string = '';

  pollOptions: any[] = [];
  pollResponses: any[] = [];


  polls: any[] = [];

  draftPoll: any = {
    question: '',
    options: []
  };

  constructor(private signal: SignalService, private http: HttpClient) { }

  ngOnInit(): void {

    this.preloadPolls();

    this.signal.getMessages().subscribe({
      next: (msg) => {
        switch (msg.type) {
          case Signal.PollQuery:
            this.polls.push(msg.data);
            console.info(msg);
            break;
          case Signal.PollResponse:
            console.info(msg);
            this.updateCount(msg.data);
            break;
          case Signal.PollOption:
            console.info(msg);
            break;
        }

      }
    });
  }

  preloadPolls() {
    const formData = new FormData();
    formData.append('roomname', this.roomname);
    this.http.post('api/poll/get', formData).subscribe({
      next: (resp: any) => {
        this.polls = resp;
      }
    })
  }

  createPollQuestion() {
    this.draftPoll.question = this.pollQuestion;
    // this.signal.sendSignal(Signal.PollQuery, { id: 'poll_' + Math.random() * 100000, owner: this.username, question: this.pollQuestion });
  }

  addPollOption() {
    if (this.pollOption != '') {
      this.draftPoll.options.push(this.pollOption);
      this.pollOption = '';
    }
    // this.signal.sendSignal(Signal.PollOption, {})
  }

  postPoll() {
    const formData = new FormData();
    formData.append('username', this.username);
    formData.append('roomname', this.roomname);
    formData.append('question', this.draftPoll.question);
    for (let option of this.draftPoll.options) {
      formData.append('option', option);
    }
    this.http.post('api/poll/create', formData).subscribe({
      next: (resp: any) => {
        this.polls.push(resp);
        this.signal.sendSignal(Signal.PollQuery, resp);
      }
    });

  }

  sendResponse(poll: any, option: any) {
    const formData = new FormData();
    formData.append('option', option.id);
    formData.append('respondee', this.username);
    this.http.post('api/poll/respond', formData).subscribe({
      next: (resp: any) => {
        this.updateCount(resp);
        this.signal.sendSignal(Signal.PollResponse, resp);
      }
    })
  }

  updateCount(resp: any) {
    let poll = this.polls.find(poll => poll.id == resp.poll);
    let option = poll.options.find((opt: any) => opt.id == resp.option);
    option.count = resp.count;
    console.info(this.polls);
  }

}
