import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageRoomComponent } from './pages/page-room/page-room.component';
import { PageSingleComponent } from './pages/page-single/page-single.component';
import { WebrtcRoutingModule } from './webrtc/webrtc-routing.module';

const routes: Routes = [
  // { path: '', component: PageHomeComponent },
  // { path: 'room', component: PageRoomComponent },
  // { path: 'single', component: PageSingleComponent }
  { path: '', loadChildren: () => WebrtcRoutingModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
