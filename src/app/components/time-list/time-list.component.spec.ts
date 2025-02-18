import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeListComponent } from './time-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('TimeListComponent', () => {
  let component: TimeListComponent;
  let fixture: ComponentFixture<TimeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeListComponent, NoopAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TimeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be rendered empty', () => {
    component.timeList = [];
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('should be rendered with one element', () => {
    component.timeList = [
      {
        ticket: 'T1',
        startTime: new Date('2025-01-12T10:00:00Z')
      }
    ];
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });
});
