import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-self-video',
  templateUrl: './self-video.component.html',
  styleUrls: []
})
export class SelfVideoComponent implements OnInit, AfterViewInit {

  @Input() username = 'Sample User Name';
  @Input() source: BehaviorSubject<MediaStream | null> = new BehaviorSubject<MediaStream | null>(null);

  @ViewChild('container', { static: true }) container !: ElementRef<HTMLDivElement>;
  @ViewChild('preview', { static: true }) preview !: ElementRef<HTMLVideoElement>;

  dragOffset = {
    x: 0,
    y: 0
  };

  videoEnabled = true;
  audioEnabled = true;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.container.nativeElement.ondragstart = (event) => {
      event.stopImmediatePropagation();
      this.dragOffset.x = event.offsetX;
      this.dragOffset.y = event.offsetY;
      this.preview.nativeElement.pause();
    };
    this.container.nativeElement.ondragend = (event) => {
      event.stopImmediatePropagation();
      this.preview.nativeElement.play();
    };
    this.container.nativeElement.ondrag = (event) => {
      event.stopImmediatePropagation();
      event.preventDefault();
      if (event.screenX == 0 && event.screenY == 0) { return; }
      this.container.nativeElement.style.top = `${event.clientY - this.dragOffset.y}px`;
      this.container.nativeElement.style.right = `${window.innerWidth - event.clientX - this.dragOffset.x}px`;
    };
    this.source.subscribe({
      next: (stream) => {
        if (stream == null) {
          return;
        }
        this.preview.nativeElement.srcObject = stream;

        this.setVideoState();
        this.setAudioState();
      }
    });
  }

  async setVideoState() {
    if (this.source.value == null) {
      return;
    }
    const mediaStream = this.source.value;
    mediaStream?.getVideoTracks().forEach(track => {
      track.enabled = this.videoEnabled;
    });
    if (mediaStream && mediaStream.getVideoTracks().length < 1 && this.videoEnabled == true) {
      let newStream = await navigator.mediaDevices.getUserMedia({ video: true });
      await newStream.getVideoTracks().forEach(track => mediaStream?.addTrack(track));
      // this.source.next(newStream);
    }
  }

  async setAudioState() {
    if (this.source.value == null) {
      return;
    }
    const mediaStream = this.source.value;
    mediaStream?.getAudioTracks().forEach(track => {
      track.enabled = this.audioEnabled;
    });
    if (mediaStream && mediaStream.getAudioTracks().length < 1 && this.audioEnabled == true) {
      let newStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      await newStream.getAudioTracks().forEach(track => mediaStream?.addTrack(track));
      // this.source.next(newStream);
    }
  }

  toggleVideo(event: Event) {
    this.videoEnabled = !this.videoEnabled;
    this.setVideoState();
  }

  toggleAudio(event: Event) {
    this.audioEnabled = !this.audioEnabled;
    this.setAudioState();
  }

}
