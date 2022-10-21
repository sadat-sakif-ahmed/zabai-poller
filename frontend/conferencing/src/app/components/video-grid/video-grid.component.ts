import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Connection } from 'src/app/pages/page-room/page-room.component';
import { RemotePeersService } from 'src/app/services/remote-peers.service';

@Component({
  selector: 'app-video-grid',
  templateUrl: './video-grid.component.html',
  styleUrls: []
})
export class VideoGridComponent implements OnInit {

  peers = new BehaviorSubject<any[]>([]);

  @Input() connections !: Connection[];

  constructor(private peerService: RemotePeersService) { }

  ngOnInit(): void {
  }

}
