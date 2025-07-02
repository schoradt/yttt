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

  it('validate ticket value - empty', () => {
    //component.form.get('ticket')?.setValue('T');
    fixture.detectChanges();

    expect(component.form.get('ticket')?.errors?.['required']).toEqual(true);
  });

  it('validate ticket value - to short', () => {
    component.form.get('ticket')?.setValue('T');
    fixture.detectChanges();

    expect(component.form.get('ticket')?.errors?.['minlength']).toEqual({
      actualLength: 1,
      requiredLength: 2
    });
  });

  it('validate ticket value - to long', () => {
    component.form.get('ticket')?.setValue('012345678901234567890');
    fixture.detectChanges();

    expect(component.form.get('ticket')?.errors?.['maxlength']).toEqual({
      actualLength: 21,
      requiredLength: 20
    });
  });
});
