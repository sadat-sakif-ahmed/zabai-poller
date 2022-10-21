import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-video-preview',
  templateUrl: './video-preview.component.html',
  styleUrls: []
})
export class VideoPreviewComponent implements OnInit, AfterViewInit {

  @Input() username = 'Sample User Name';
  @Input() streamSource: BehaviorSubject<MediaStream | null> = new BehaviorSubject<MediaStream | null>(null);

  @ViewChild('container', { static: true }) container !: ElementRef<HTMLDivElement>;
  @ViewChild('preview', { static: true }) preview !: ElementRef<HTMLVideoElement>;

  dragOffset = {
    x: 0,
    y: 0
  };

  videoEnabled = false;
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
    this.streamSource.subscribe({
      next: (stream) => {
        this.preview.nativeElement.srcObject = stream;
        
        this.setVideoState();
        this.setAudioState();
      }
    });
  }

  setVideoState() {
    const mediaStream = this.streamSource.value;
    mediaStream?.getVideoTracks().forEach(track => {
      track.enabled = this.videoEnabled;
    });
  }

  setAudioState() {
    const mediaStream = this.streamSource.value;
    mediaStream?.getAudioTracks().forEach(track => {
      track.enabled = this.audioEnabled;
    });
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
