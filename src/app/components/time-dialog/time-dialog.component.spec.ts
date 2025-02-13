import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeDialogComponent } from './time-dialog.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('TimeDialogComponent', () => {
  let component: TimeDialogComponent;
  let fixture: ComponentFixture<TimeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeDialogComponent, NoopAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TimeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be rendered right', () => {
    expect(fixture).toMatchSnapshot();
  });
});
