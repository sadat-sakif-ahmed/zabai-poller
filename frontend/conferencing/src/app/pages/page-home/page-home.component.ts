import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: []
})
export class PageHomeComponent implements OnInit {

  @ViewChild('createRoom') createRoom !: ElementRef<HTMLElement>;
  @ViewChild('joinRoom') joinRoom !: ElementRef<HTMLElement>;

  createRoomForm !: FormGroup;
  joinRoomForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.createRoomForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      roomname: [null, [Validators.required]],
    });
    this.joinRoomForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      roomname: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  toggleCreate(event: Event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.createRoom.nativeElement.classList.toggle('hidden');
  }

  dismissCreate(event: Event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.createRoom.nativeElement.classList.toggle('hidden');
  }

  createRoomSubmit() {
    console.info(this.createRoomForm.valid, this.createRoomForm.value);
    const formData = new FormData();
    formData.append('data', JSON.stringify(this.createRoomForm.value));
    this.http.post('socket/create/room/', formData).subscribe({
      next: (resp: any) => {
        console.info(resp);
      },
      error: (err: any) => {
        console.error(err);
      }
    })
  }

  toggleJoin(event: Event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.joinRoom.nativeElement.classList.toggle('hidden');
  }

  dismissJoin(event: Event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.joinRoom.nativeElement.classList.toggle('hidden');
  }

  joinRoomSubmit() {
    console.info(this.joinRoomForm.valid, this.joinRoomForm.value);
    const formData = new FormData();
    formData.append('data', JSON.stringify(this.joinRoomForm.value));
    this.http.post('socket/join/room/', formData).subscribe({
      next: (resp: any) => {
        console.info(resp);
      },
      error: (err: any) => {
        console.error(err);
      }
    })
  }

  navigateToRoom(username: string) {
    window.localStorage.setItem('username', username);
    this.router.navigate(['/', 'room']);
  }

  stopPropagation(event: Event) {
    event.stopImmediatePropagation();
  }

}
