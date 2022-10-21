import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageLobbyComponent } from './pages/page-lobby/page-lobby.component';
import { PageRoomComponent } from './pages/page-room/page-room.component';

const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'lobby', component: PageLobbyComponent },
  { path: 'room', component: PageRoomComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebrtcRoutingModule { }
