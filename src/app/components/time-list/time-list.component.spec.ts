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
});
