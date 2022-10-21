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
    const jsonData = this.createRoomForm.value;
    for (let item of Object.keys(jsonData)) {
      formData.append(item, jsonData[item]);
      console.log(item, jsonData[item]);
    }
    // this.navigateToLobby();
    //todo: connect this to actual server
    this.http.post('api/user/create', formData).subscribe({
      next: (resp: any) => {
        console.info(resp);
        window.sessionStorage.setItem('session', JSON.stringify(resp));
        this.navigateToLobby();
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
    const jsonData = this.joinRoomForm.value;
    for (let item of Object.keys(jsonData)) {
      formData.append(item, jsonData[item]);
      console.log(item, jsonData[item]);
    }
    // this.navigateToLobby();
    //todo: connect this to actual server
    this.http.post('api/user/get', formData).subscribe({
      next: (resp: any) => {
        console.info(resp);
        window.sessionStorage.setItem('session', JSON.stringify(resp));
        this.navigateToLobby();
      },
      error: (err: any) => {
        console.error(err);
      }
    })
  }

  navigateToLobby() {
    this.router.navigate(['/', 'lobby']);
  }

  stopPropagation(event: Event) {
    event.stopImmediatePropagation();
  }

}
