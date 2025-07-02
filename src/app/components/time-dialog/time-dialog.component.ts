import { Component, EventEmitter, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DataService } from '../../services/data/data.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { TimeTrack } from '../../model/time-track';
import { NgIf } from '@angular/common';

interface TimeTrackAddForm {
  ticket: FormControl<string>;
  description: FormControl<string | null>;
}

@Component({
  selector: 'yttt-time-dialog',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './time-dialog.component.html',
  styleUrl: './time-dialog.component.scss'
})
export class TimeDialogComponent {
  @Output()
  newItemEvent = new EventEmitter<TimeTrack>();

  form: FormGroup<TimeTrackAddForm>;

  constructor(
    private readonly dataService: DataService,
    private readonly formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      ticket: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20)
        ]
      }),
      description: new FormControl('', {})
    });
  }

  submit() {
    const values = this.form.value;

    const ticket: TimeTrack = {
      startTime: new Date(),
      ticket: values.ticket || '',
      description: values.description || undefined
    };

    console.log(ticket);

    this.dataService.storeTimeTrack(ticket).subscribe((track) => {
      console.log(track);
      this.newItemEvent.emit(track);
      console.log('emitted newItemEvent');
    });
  }
}
