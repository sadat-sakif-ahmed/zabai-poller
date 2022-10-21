import { Component, ElementRef, OnInit, ViewChild, ɵɵsanitizeUrl } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-lobby',
  templateUrl: './page-lobby.component.html',
  styleUrls: []
})
export class PageLobbyComponent implements OnInit {

  @ViewChild('mediaPreview', { static: true }) mediaPreview !: ElementRef<HTMLVideoElement>;

  mediaTracks = { audio: true, video: true };
  mediaStream!: MediaStream;
  session: any = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getMediaStream();
    let rawData = window.sessionStorage.getItem('session');
    if (rawData != null) {
      this.session = JSON.parse(rawData);
    }
  }

  async getMediaStream() {
    this.mediaStream = await navigator.mediaDevices.getUserMedia(this.mediaTracks);
    this.mediaPreview.nativeElement.srcObject = this.mediaStream;
  }

  async toggleVideo() {
    this.mediaTracks.video = !this.mediaTracks.video;
    await this.mediaStream.getVideoTracks().forEach(track => {
      track.enabled = this.mediaTracks.video;
    });
  }
  async toggleAudio() {
    this.mediaTracks.audio = !this.mediaTracks.audio;
    await this.mediaStream.getAudioTracks().forEach(track => {
      track.enabled = this.mediaTracks.audio;
    });
  }

  joinRoom() {
    window.sessionStorage.setItem('mediaParam', JSON.stringify(this.mediaTracks));
    this.mediaStream.getTracks().forEach(track => track.stop());
    this.router.navigateByUrl('/room');
  }

  exitSession() {
    this.mediaStream.getTracks().forEach(track => track.stop());
    this.router.navigateByUrl('/');
  }

  shareLink() {
    let room_url = `https://${window.location.host}/room/${this.session.roomname}`;
    navigator.clipboard.writeText(room_url);
  }

}
