import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-speaker-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './speaker-form.component.html',
  styleUrl: './speaker-form.component.scss',
})
export class SpeakerFormComponent {
  speakerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    topic: new FormControl('', Validators.required),
    presentationFormat: new FormControl('online', Validators.required),
    description: new FormControl('',Validators.required),
    tosConsent: new FormControl('', Validators.required),
  });
 
  constructor(private http: HttpClient) {}

  handleSubmit(): void {
    if (!this.speakerForm.valid) {
      alert('Wypełnij/zaznacz poprawnie wszystkie wymagane pola!');
      return;
    }
    const formData: any = this.speakerForm.value;
    formData.type = 'speaker';
    this.http
      .post('http://localhost:3000/submit-form', formData)
      .subscribe((res: any) => {
        if (res.result) {
          alert('Dziękujemy za wypełnienie formularza!');
        } else {
          alert('Wystąpił błąd');
        }
      });
  }
}
