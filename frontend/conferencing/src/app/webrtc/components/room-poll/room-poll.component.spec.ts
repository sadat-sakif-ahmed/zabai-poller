import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomPollComponent } from './room-poll.component';

describe('RoomPollComponent', () => {
  let component: RoomPollComponent;
  let fixture: ComponentFixture<RoomPollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomPollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
