import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {}

  handleSubmit(): void {
    if (!this.participantForm.valid) {
      alert('Wypełnij/zaznacz poprawnie wszystkie wymagane pola!');
      return;
    }
    const formData: any = this.participantForm.value;
    formData.type = 'participant';
    this.http.post('http://localhost:3000/submit-form', formData).subscribe((res: any) => {
      if (res.result) {
        alert('Dziękujemy za wypełnienie formularza!');
      } else {
        alert('Wystąpił błąd');
      }
    });
  }
}
