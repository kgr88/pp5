import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-participant-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './participant-form.component.html',
  styleUrl: './participant-form.component.scss',
})
export class ParticipantFormComponent {
  participantForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    ticketType: new FormControl('', Validators.required),
    workshopAttendance: new FormControl('Nie', Validators.required),
    tosConsent: new FormControl('', Validators.required),
    description: new FormControl(''),
  });

  handleSubmit():void {
    if (!this.participantForm.valid) {
      alert('Wypełnij poprawnie wszystkie pola!');
      return;
    }
    const formData: any = this.participantForm.value;
    const participantForms: any = JSON.parse(
      localStorage.getItem('participantForms') || '[]'
    );
    participantForms.push(formData);
    localStorage.setItem('participantForms', JSON.stringify(participantForms));
    alert('Dziękujemy za wypełnienie formularza!');
  }
}
