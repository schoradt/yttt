import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTrackPageComponent } from './time-track-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('TimeTrackPageComponent', () => {
  let component: TimeTrackPageComponent;
  let fixture: ComponentFixture<TimeTrackPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeTrackPageComponent, NoopAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TimeTrackPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
